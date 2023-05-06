using JohnnyBluhmWeb.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Text;
using System.Text.Json;

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
        // GET: api/<StravaController>

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

        [HttpGet("GetAll")]
        public async Task<string> GetAll()
        {
            var timer = new Stopwatch();
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
            return $"Done bitch in {timer.Elapsed}!";
        }

        [HttpGet("GetAllFromFile")]
        public string GetAllFromFile()
        {
            var timer = new Stopwatch();
            timer.Start();
            int month = 0;
            int year = 2020;
            var activities = new List<ActivityResponse>();

            while (true)
            {
                try
                {
                    var fileStream = new StreamReader($"{_env.WebRootPath}/CachedData/Activities/activities-{month + 1}-{year}.txt");
                    var activityString = fileStream.ReadToEnd();                    
                    fileStream.Close();
                    var activitiesFromOneMonth = JsonSerializer.Deserialize<List<ActivityResponse>>(activityString);                
                    activities.AddRange(activitiesFromOneMonth);
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

            timer.Stop();


            return $"Done bitch in {timer.Elapsed.TotalMilliseconds}ms!";
        }

        // POST api/<StravaController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<StravaController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<StravaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
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

        private async void GetActivity()
        {

        }
    }
}
