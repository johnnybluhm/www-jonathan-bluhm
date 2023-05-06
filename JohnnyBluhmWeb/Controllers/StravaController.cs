using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JohnnyBluhmWeb.Controllers
{
    [Route("api/")]
    [ApiController]
    public class StravaController : ControllerBase
    {
        // GET: api/<StravaController>
        [HttpGet]
        [Route("strava")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<StravaController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
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
    }
}
