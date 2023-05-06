using JohnnyBluhmWeb.Models;
using Microsoft.AspNetCore.Mvc;
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
            refreshReader.Close();

            refreshReader.Dispose();
            accessReader.Dispose();

            this.refreshToken = refreshToken ?? "";
            this.accessToken = accessToken ?? "";
        }

        [HttpGet]
        [Route("strava")]
        public IActionResult Get()
        {
            var refreshWriter = new StreamWriter($"{_env.WebRootPath}/CachedData/Tokens/refreshToken.txt");
            refreshWriter.WriteLine("wrote");
            refreshWriter.WriteLine("wrote");
            refreshWriter.WriteLine("wrote");
            refreshWriter.WriteLine("wrote");
            refreshWriter.WriteLine("wrote");
            refreshWriter.WriteLine("wrote");
            refreshWriter.WriteLine("wrote");
            refreshWriter.WriteLine("wrote");
            refreshWriter.Close();

            var accessWriter = new StreamWriter($"{_env.WebRootPath}/CachedData/Tokens/accessToken.txt");
            accessWriter.WriteLine("wrote");
            accessWriter.Close();
            return Ok();

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
            var url = $"https://www.strava.com/oauth/token?client_id="+clientId+"&client_secret="+clientSecret+"&code="+code+"&grant_type=authorization_code";

            try
            {
                var res = await _httpClient.PostAsync(url, null);

                var oAuthResponse = await res.Content.ReadAsStringAsync();

                var tokens = JsonSerializer.Deserialize<OAuthResponse>(oAuthResponse);

                using var refreshWriter = new StreamWriter($"{_env.WebRootPath}/CachedData/Tokens/refreshToken.txt");
                refreshWriter.WriteLine(tokens?.refresh_token);
                refreshWriter.Close();

                using var accessWriter = new StreamWriter($"{_env.WebRootPath}/CachedData/Tokens/accessToken.txt");
                accessWriter.WriteLine(tokens?.access_token);
                accessWriter.Close();

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
            return false;
        }
    }
}
