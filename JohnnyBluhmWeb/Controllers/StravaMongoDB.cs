using JohnnyBluhmWeb.DataAccess;
using JohnnyBluhmWeb.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using Newtonsoft.Json;

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
        [Route("GetAllStreams")]
        public async Task<IEnumerable<ActivityStream>> GetAllStreams()
        {
            var filter = Builders<ActivityStream>.Filter.Empty;
            var result = await mongoService.streamCollection.FindAsync<ActivityStream>(filter);
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
    }
}
