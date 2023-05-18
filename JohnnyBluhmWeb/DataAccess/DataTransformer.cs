using JohnnyBluhmWeb.Models;
using MongoDB.Driver;

namespace JohnnyBluhmWeb.DataAccess
{
    public class DataTransformer
    {
        private MongoService mongoService = new MongoService();

        public async Task ConvertHrStreamsToBetterStreams()
        {
            try
            {
                var activityStreams = await GetActivtyStreams();

                foreach (var activityStream in activityStreams)
                {
                    if (activityStream.heartrate is null || activityStream.heartrate.data is null)
                    {
                        continue;
                    }
                    var hrStream = activityStream?.heartrate?.data;

                    if(hrStream is null)
                    {
                        continue;
                    }

                    var betterHrStream = new HeartRateStream();

                    for (int i = 0; i < hrStream.Count; i++)
                    {
                        var hrKey = hrStream[i];
                        if (betterHrStream.heartRateDict.ContainsKey(hrKey.ToString()))
                        {
                            betterHrStream.heartRateDict.TryGetValue(hrKey.ToString(), out var count);
                            if(count is null)
                            {
                                continue;
                            }
                            betterHrStream.heartRateDict[hrKey.ToString()] = (int.Parse(count) + 1).ToString();
                        }
                        else
                        {
                            betterHrStream.heartRateDict.Add(hrKey.ToString(), "1");
                        }
                    }
                    betterHrStream.id = activityStream!.id;

                    InsertIntoMongo(betterHrStream);
                }
            }
            catch
            {
                throw;
            }
        }

        private async Task<List<ActivityStream>> GetActivtyStreams()
        {
            var filter = Builders<ActivityStream>.Filter.Empty;
            var results = await mongoService.streamCollection.FindAsync<ActivityStream>(filter);
            return results.ToList();
        }

        private void InsertIntoMongo(HeartRateStream betterHrStream)
        {
            try
            {
                mongoService.heartRateCollection.InsertOne(betterHrStream);
            }
            catch (MongoException e)
            {
                var ex = e;

            }
        }
    }
}
