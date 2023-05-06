using Microsoft.AspNetCore.Mvc;

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
        // GET: api/<StravaController>
        [HttpGet]
        [Route("strava")]
        public IActionResult Get()
        {
            return Redirect("https://www.strava.com/oauth/authorize?client_id=66831&response_type=code&redirect_uri=https://localhost:7038/exchange_token&scope=read,activity:read,activity:read_all");


        }

        // GET api/<StravaController>/5
        [HttpGet("exchange_token")]
        public string Exchange()
        {
            var url = ControllerContext.HttpContext.Request.Query;
            HttpContext.Request.Query.TryGetValue("code", out var codeFromDict);

            var code = "d1fee441fc9ae07ff47754270dcc3c2b28a013c8";



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
            var url = $"https://www.strava.com/oauth/token?clientId="+clientId+"&clientSecret="+clientSecret+"&code="+code+"&grant_type="+code;

            try
            {
                var res = _httpClient.PostAsync(url, null);

                var token = await res.Result.Content.ReadAsStringAsync();
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
