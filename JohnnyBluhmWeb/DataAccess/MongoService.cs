using JohnnyBluhmWeb.Models;
using MongoDB.Driver;

namespace JohnnyBluhmWeb.DataAccess
{
    public class MongoService
    {
        private MongoClient mongoClient;
        private const string connectionUri = "mongodb://localhost:27017";
        private const string activitiesString = "activities";
        private const string detailedActivitiesString = "detailedActivities";
        private const string streamsString = "streams";
        private const string hrString = "hrStreams";
        private IMongoDatabase stravaDb;
        public IMongoCollection<StravaActivity> activitiesCollection;
        public IMongoCollection<DetailedActivity> detailedActivitiesCollection;
        public IMongoCollection<ActivityStream> streamCollection;
        public IMongoCollection<HeartRateStream> heartRateCollection;

        public MongoService()
        {
            SetUpMongo();
        }

        private void SetUpMongo()
        {
            var settings = MongoClientSettings.FromConnectionString(connectionUri);
            // Set the ServerApi field of the settings object to Stable API version 1
            settings.ServerApi = new ServerApi(ServerApiVersion.V1);
            // Create a new client and connect to the server
            mongoClient = new MongoClient(settings);
            stravaDb = mongoClient.GetDatabase("strava");
            activitiesCollection = stravaDb.GetCollection<StravaActivity>(activitiesString);
            detailedActivitiesCollection = stravaDb.GetCollection<DetailedActivity>(detailedActivitiesString);
            streamCollection = stravaDb.GetCollection<ActivityStream>(streamsString);
            heartRateCollection = stravaDb.GetCollection<HeartRateStream>(hrString);
        }
    }
}
