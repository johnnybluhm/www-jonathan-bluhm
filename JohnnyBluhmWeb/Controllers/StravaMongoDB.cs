using JohnnyBluhmWeb.DataAccess;
using JohnnyBluhmWeb.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using Newtonsoft.Json;
using System.Diagnostics;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JohnnyBluhmWeb.Controllers
{
    [Route("api/stravaMongo/")]
    [ApiController]
    public class StravaMongoDB : ControllerBase
    {
        private static MongoService mongoService = new MongoService();

        [HttpGet]
        [Route("GetAllDetailedActivities")]
        public async Task<IEnumerable<DetailedActivity>> GetAllDetailedActivities()
        {
            var filter = Builders<DetailedActivity>.Filter.Empty;
            var result = await mongoService.detailedActivitiesCollection.FindAsync<DetailedActivity>(filter);
            return result.ToList();
        }

        [HttpGet]
        [Route("GetAllActivities")]
        public async Task<IEnumerable<StravaActivity>> GetAllActivities()
        {
            var filter = Builders<StravaActivity>.Filter.Empty;
            var result = await mongoService.activitiesCollection.FindAsync<StravaActivity>(filter);
            return result.ToList();
        }

        [HttpGet]
        [Route("GetAllHrStreams")]
        public async Task<string> GetAllHrStreams()
        {
            var filter = Builders<HeartRateStream>.Filter.Empty;
            var result = await mongoService.heartRateCollection.FindAsync<HeartRateStream>(filter);
            return JsonConvert.SerializeObject(result.ToList());
        }
        [HttpGet]
        [Route("GetAllPowerStreams")]
        public async Task<string> GetAllPowerStreams()
        {
            var filter = Builders<PowerStream>.Filter.Empty;
            var result = await mongoService.powerCollection.FindAsync<PowerStream>(filter);
            return JsonConvert.SerializeObject(result.ToList());
        }

        [HttpGet]
        [Route("GetPowerStreamById/{id}")]
        public async Task<string> GetAllPowerStreams([FromRoute] long id)
        {
            var filter = Builders<PowerStream>.Filter;
            var result = await mongoService.powerCollection.FindAsync<PowerStream>(e =>e.id == id);
            return JsonConvert.SerializeObject(result.ToList());
        }

        [HttpGet]
        [Route("timeTest/{id}")]
        public async Task<string> TimeTest([FromRoute] long id)
        {
            var filter = Builders<PowerStream>.Filter.Empty;
            var result = await mongoService.powerCollection.FindAsync<PowerStream>(filter);

            var list = result.ToList();
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            list.Find(e => e.id == id);
            stopwatch.Stop();
            return stopwatch.ElapsedMilliseconds.ToString();
        }
    }
}
