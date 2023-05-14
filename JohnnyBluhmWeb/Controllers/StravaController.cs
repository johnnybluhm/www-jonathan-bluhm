using JohnnyBluhmWeb.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Text;
using System.Text.Json;
using MongoDB.Driver;
using MongoDB.Bson;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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

        private MongoClient mongoClient;

        private const string connectionUri= "mongodb://localhost:27017";
        public StravaController(IWebHostEnvironment hostingEnvironment)
        {
            _env = hostingEnvironment;
            var refreshReader = new StreamReader($"{hostingEnvironment.WebRootPath}/CachedData/Tokens/refreshToken.txt");
            var refreshToken = refreshReader.ReadToEnd();
            refreshReader.Close();

            var accessReader = new StreamReader($"{hostingEnvironment.WebRootPath}/CachedData/Tokens/accessToken.txt");
            var accessToken = accessReader.ReadToEnd();
            accessReader.Close();

            refreshReader.Dispose();
            accessReader.Dispose();

            this.refreshToken = refreshToken ?? "";
            this.accessToken = accessToken ?? "";

            mongoClient = SetUpMongo();
        }

        // GET api/<StravaController>/5
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

        [HttpGet("GetAllFromFile")]
        public async Task<string> GetAllFromFile()
        {
            var activities = GetAllActivitiesFromFile();

            foreach (var activity in activities)
            {
                var url = $"https://www.strava.com/api/v3/activities/" + activity.id.ToString() + "?include_all_efforts=false";
                var request = new HttpRequestMessage();
                request.Method = HttpMethod.Get;
                request.Headers.Add("Authorization", $"Bearer {accessToken}");
                request.RequestUri = new Uri(url);

                try
                {
                    var res = await _httpClient.SendAsync(request);
                    //1577862000
                    //2629743 one month epoch

                    var content = await res.Content.ReadAsStringAsync();
                    var activityDate = activity.start_date;
                    var dir = $"{_env.WebRootPath}/CachedData/DetailedActivities-{activityDate.GetValueOrDefault().Month}-{activityDate.GetValueOrDefault().Year}";
                    bool exists = System.IO.Directory.Exists(dir);
                    if (!exists)
                    {
                        System.IO.Directory.CreateDirectory(dir);
                    }
                    var fileStream = new StreamWriter($"{dir}/{activity.id}.txt");

                    fileStream.WriteLine(content);
                    fileStream.Close();
                }
                catch (Exception ex)
                {
                    return $"Caught execption: Message: {ex.Message}, Data: {ex.Data}";
                }
            }
            return $"Done bitch!";
        }

        [HttpGet("go")]
        public async Task<string> GetDetailedActivities()
        {
            var db = mongoClient.GetDatabase("strava");
            var collection = db.GetCollection<DetailedActivity>("detailedActivities");

            var activities = GetAllActivitiesFromFile();
            activities.Sort((x, y) => x.start_date_local.GetValueOrDefault().CompareTo(y.start_date_local.GetValueOrDefault()));
            activities.Reverse();

            var newestDateNeeded = GetDateFromFileOfLastSuccesfulGetFromStrava();

            var filtered = activities.Where(e => e.start_date_local.GetValueOrDefault().CompareTo(newestDateNeeded) < 0 || e.start_date_local.GetValueOrDefault().CompareTo(newestDateNeeded) == 0).ToList();

            foreach (var activity in filtered)
            {
                var request = GetDetailedActivitiyRequest(activity.id);
                try
                {
                    sendRequestToStrava:
                    var res = await _httpClient.SendAsync(request);
                    var content = await res.Content.ReadAsStringAsync();
                    bool retried = false;
                    if (content.Contains("Rate Limit Exceeded"))
                    {
                        using var refreshWriter = new StreamWriter($"{_env.WebRootPath}/CachedData/lastWrite.txt");
                        refreshWriter.Write($"{activity.start_date_local}");
                        refreshWriter.Close();
                        if(!retried)
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

        [HttpGet]
        [Route("Mongo")]
        public string Mongo()
        {
            try
            {
                var db = mongoClient.GetDatabase("strava");
                var collection = db.GetCollection<StravaActivity>("activities");
                var results = collection.Find(e => e.id.HasValue).ToList();

                return $"Result is {results.ToJson()}";
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return ex.Message;
            }
        }

        private DateTime GetDateFromFileOfLastSuccesfulGetFromStrava()
        {
            var accessReader = new StreamReader($"{_env.WebRootPath}/CachedData/lastWrite.txt");
            var accessToken = accessReader.ReadToEnd();
            accessReader.Close();
            return DateTime.Parse(accessToken);
        }

        /*private async Task<DetailedActivity> SendRequestAndDeserialize(HttpRequestMessage request)
        {
            var res = await _httpClient.SendAsync(request);
            var content = await res.Content.ReadAsStringAsync();
            if (content.Contains("Rate Limit Exceeded"))
            {
                using var refreshWriter = new StreamWriter($"{_env.WebRootPath}/CachedData/lastWrite.txt");
                //refreshWriter.Write($"Activity date when rateLimitExceeded = date= {activity.start_date_local} and id = {activity.id}");
                refreshWriter.Close();
                await Task.Delay(TimeSpan.FromMinutes(15));
            }
            var model = JsonSerializer.Deserialize<DetailedActivity>(content);
            return model;
        }*/

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

        private List<Models.StravaActivity> GetAllActivitiesFromFile()
        {
            int month = 0;
            int year = 2020;
            var activities = new List<Models.StravaActivity>();

            while (true)
            {
                try
                {
                    var fileStream = new StreamReader($"{_env.WebRootPath}/CachedData/Activities/activities-{month + 1}-{year}.txt");
                    var activityString = fileStream.ReadToEnd();
                    fileStream.Close();
                    var activitiesFromOneMonth = JsonSerializer.Deserialize<List<Models.StravaActivity>>(activityString);
                    activities.AddRange(activitiesFromOneMonth!);
                    //loop reseting
                    month++;

                    if (month % 12 == 0)
                    {
                        month = 0;
                        year++;
                    }
                }
                catch (FileNotFoundException)
                {
                    break;
                }
            }

            return activities;
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

        private MongoClient SetUpMongo()
        {
            var settings = MongoClientSettings.FromConnectionString(connectionUri);
            // Set the ServerApi field of the settings object to Stable API version 1
            settings.ServerApi = new ServerApi(ServerApiVersion.V1);
            // Create a new client and connect to the server
            var client = new MongoClient(settings);
            return client;
        }

        [HttpGet("GetAll")]
        public async Task<string> GetAll()
        {
            /*var timer = new Stopwatch();
            timer.Start();
            var epoch2020 = 1577862000;
            var epochOneMonth = 2629743;
            var before = epoch2020 + epochOneMonth;
            var after = epoch2020;
            var epochNow = 1683363184;
            int month = 0;
            int year = 2020;
            while (after < epochNow)
            {
                var url = $"https://www.strava.com/api/v3/athlete/activities?per_page=200&before=" + before.ToString() + "&after=" + after.ToString();
                var request = new HttpRequestMessage();
                request.Method = HttpMethod.Get;
                request.Headers.Add("Authorization", $"Bearer {accessToken}");
                request.RequestUri = new Uri(url);

                try
                {
                    var res = await _httpClient.SendAsync(request);
                    //1577862000
                    //2629743 one month epoch

                    var content = await res.Content.ReadAsStringAsync();

                    var fileStream = new StreamWriter($"{_env.WebRootPath}/CachedData/Activities/activities-{month + 1}-{year}.txt");

                    fileStream.WriteLine(content);
                    fileStream.Close();

                    //loop reseting
                    after = after + epochOneMonth;
                    before = before + epochOneMonth;
                    month++;
                    if (month % 12 == 0)
                    {
                        month = 0;
                        year++;
                    }
                }
                catch (Exception ex)
                {
                    return ex.Message;
                }
            }
            timer.Stop();
            return $"Done bitch in {timer.Elapsed}!";*/
            return "h";
        }
    }
}
