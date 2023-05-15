using JohnnyBluhmWeb.DataAccess;
using JohnnyBluhmWeb.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Net;
using System.Text.Json;

namespace JohnnyBluhmWeb.Controllers
{
    [Route("api/")]
    [ApiController]
    public class StravaController : ControllerBase
    {
        private static HttpClient _httpClient = new HttpClient();
        private string clientId = "66831";
        private string clientSecret = "a9d10ba407da3fecec77dbc0ec46163768294367";
        private string refreshToken;
        private string accessToken;
        private IWebHostEnvironment _env;
        private static MongoService mongoService = new MongoService();

        public StravaController(IWebHostEnvironment hostingEnvironment)
        {
            _env = hostingEnvironment;
            SetTokensToValueFromFile();
        }

        [HttpGet("go")]
        public async Task<string> GetDetailedActivities()
        {
            var collection = mongoService.detailedActivitiesCollection;

            var activities = new List<StravaActivity>();
            activities.Sort((x, y) => x.start_date_local.GetValueOrDefault().CompareTo(y.start_date_local.GetValueOrDefault()));
            activities.Reverse();

            var newestDateNeeded = GetDateFromFileOfLastSuccesfulGetFromStrava();

            var filtered = activities.Where(e => e.start_date_local.GetValueOrDefault().CompareTo(newestDateNeeded) < 0 || e.start_date_local.GetValueOrDefault().CompareTo(newestDateNeeded) == 0).ToList();

            foreach (var activity in filtered)
            {
            sendRequestToStrava:
                var request = GetDetailedActivitiyRequest(activity.id);
                try
                {
                    var res = await _httpClient.SendAsync(request);
                    var content = await res.Content.ReadAsStringAsync();
                    bool retried = false;
                    if (content.Contains("Rate Limit Exceeded"))
                    {
                        using var refreshWriter = new StreamWriter($"{_env.WebRootPath}/CachedData/lastWrite.txt");
                        refreshWriter.Write($"{activity.start_date_local}");
                        refreshWriter.Close();
                        if (!retried)
                        {
                            await Task.Delay(TimeSpan.FromMinutes(14));
                        }
                        retried = true;
                        await Task.Delay(TimeSpan.FromSeconds(30));
                        goto sendRequestToStrava;
                    }
                    var model = JsonSerializer.Deserialize<DetailedActivity>(content);

                    collection.InsertOne(model);
                }
                catch (Exception ex)
                {
                    return $"Caught execption: Message: {ex.Message}, Data: {ex.Data}";
                }
            }

            return $"Done bitch!";
        }

        [HttpGet("GetAll")]
        public async Task<string> GetAllActivitiesSinceLastGetFromStrava()
        {
            var lastWrite = GetDateFromFileOfLastSuccesfulGetFromStrava();

            TimeSpan t = lastWrite - new DateTime(1970, 1, 1);
            int secondsSinceEpoch = (int)t.TotalSeconds;

            var url = $"https://www.strava.com/api/v3/athlete/activities?per_page=200&after=" + secondsSinceEpoch;
            var request = new HttpRequestMessage();
            request.Method = HttpMethod.Get;
            request.Headers.Add("Authorization", $"Bearer {accessToken}");
            request.RequestUri = new Uri(url);

            try
            {
                var res = await _httpClient.SendAsync(request);

                var content = await res.Content.ReadAsStringAsync();

                var model = JsonSerializer.Deserialize<List<StravaActivity>>(content);

                mongoService.activitiesCollection.InsertMany(model);

                return model.ToString();
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet("streams")]
        public async Task<string> GetStreams()
        {
            var collection = mongoService.streamCollection;

            var activities = mongoService.activitiesCollection.Find(Builders<StravaActivity>.Filter.Empty).ToList();
            activities.Sort((x, y) => x.start_date_local.GetValueOrDefault().CompareTo(y.start_date_local.GetValueOrDefault()));
            activities.Reverse();

            var newestDateNeeded = GetDateFromFileOfLastSuccesfulGetFromStrava();

            var filtered = activities.Where(e => e.start_date_local.GetValueOrDefault().CompareTo(newestDateNeeded) < 0 || e.start_date_local.GetValueOrDefault().CompareTo(newestDateNeeded) == 0).ToList();

            foreach (var activity in filtered)
            {
            sendRequestToStrava:
                var request = GetDetailedActivitiyRequest(activity.id);
                request.RequestUri = new Uri("https://www.strava.com/api/v3/activities/" + $"{activity.id.ToString()}/streams?keys=distance,altitude,heartrate,watts&key_by_type=true");
                try
                {
                    var res = await _httpClient.SendAsync(request);
                    var content = await res.Content.ReadAsStringAsync();
                    bool retried = false;
                    if (content.Contains("Rate Limit Exceeded"))
                    {
                        using var refreshWriter = new StreamWriter($"{_env.WebRootPath}/CachedData/lastWrite.txt");
                        refreshWriter.Write($"{activity.start_date_local}");
                        refreshWriter.Close();
                        if (!retried)
                        {
                            await Task.Delay(TimeSpan.FromMinutes(14));
                        }
                        retried = true;
                        await Task.Delay(TimeSpan.FromSeconds(30));
                        goto sendRequestToStrava;
                    }
                    if (res.StatusCode == HttpStatusCode.NotFound)
                    {
                        continue;
                    }
                    var model = JsonSerializer.Deserialize<ActivityStream>(content);
                    model.id = activity.id.GetValueOrDefault();
                    collection.InsertOne(model);
                }
                catch (Exception ex)
                {
                    return $"Caught execption: Message: {ex.Message}, Data: {ex.Data}";
                }
            }

            return $"Done bitch!";
        }

        private HttpRequestMessage GetDetailedActivitiyRequest(long? activityId)
        {
            var url = $"https://www.strava.com/api/v3/activities/" + activityId.ToString() + "?include_all_efforts=false";
            var request = new HttpRequestMessage();
            request.Method = HttpMethod.Get;
            request.Headers.Add("Authorization", $"Bearer {accessToken}");
            request.RequestUri = new Uri(url);
            return request;
        }

        private async Task<bool> GenerateNewToken(string code)
        {
            var url = $"https://www.strava.com/oauth/token?client_id=" + clientId + "&client_secret=" + clientSecret + "&code=" + code + "&grant_type=authorization_code";

            try
            {
                var res = await _httpClient.PostAsync(url, null);

                var oAuthResponse = await res.Content.ReadAsStringAsync();

                var tokens = JsonSerializer.Deserialize<OAuthResponse>(oAuthResponse);

                using var refreshWriter = new StreamWriter($"{_env.WebRootPath}/CachedData/Tokens/refreshToken.txt");
                refreshWriter.Write(tokens?.refresh_token);
                refreshWriter.Close();

                using var accessWriter = new StreamWriter($"{_env.WebRootPath}/CachedData/Tokens/accessToken.txt");
                accessWriter.Write(tokens?.access_token);
                accessWriter.Close();

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
            return false;
        }

        private async Task<bool> RefreshToken()
        {
            var url = $"https://www.strava.com/oauth/token?client_id=" + $"{clientId}&client_secret={clientSecret}&grant_type=refresh_token&refresh_token={refreshToken}";

            try
            {
                var res = await _httpClient.PostAsync(url, null);

                var oAuthResponse = await res.Content.ReadAsStringAsync();

                var tokens = JsonSerializer.Deserialize<OAuthResponse>(oAuthResponse);

                using var refreshWriter = new StreamWriter($"{_env.WebRootPath}/CachedData/Tokens/refreshToken.txt");
                refreshWriter.Write(tokens?.refresh_token);
                refreshWriter.Close();

                using var accessWriter = new StreamWriter($"{_env.WebRootPath}/CachedData/Tokens/accessToken.txt");
                accessWriter.Write(tokens?.access_token);
                accessWriter.Close();

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
            return false;
        }

        private DateTime GetDateFromFileOfLastSuccesfulGetFromStrava()
        {
            var accessReader = new StreamReader($"{_env.WebRootPath}/CachedData/lastWrite.txt");
            var accessToken = accessReader.ReadToEnd();
            accessReader.Close();
            return DateTime.Parse(accessToken);
        }

        private void SetTokensToValueFromFile()
        {
            var refreshReader = new StreamReader($"{_env.WebRootPath}/CachedData/Tokens/refreshToken.txt");
            var refreshToken = refreshReader.ReadToEnd();
            refreshReader.Close();

            var accessReader = new StreamReader($"{_env.WebRootPath}/CachedData/Tokens/accessToken.txt");
            var accessToken = accessReader.ReadToEnd();
            accessReader.Close();

            refreshReader.Dispose();
            accessReader.Dispose();

            this.refreshToken = refreshToken ?? "";
            this.accessToken = accessToken ?? "";
        }

        [HttpGet("exchange_token")]
        public async Task<string> Exchange()
        {
            var url = ControllerContext.HttpContext.Request.Query;
            HttpContext.Request.Query.TryGetValue("code", out var codeFromDict);

            var success = await GenerateNewToken(codeFromDict);

            return "value";
        }

        [HttpGet("RefreshToken")]
        public async Task<string> Refresh()
        {
            await RefreshToken();

            return "refreshed";
        }
    }
}
