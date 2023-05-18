using MongoDB.Bson.Serialization.Attributes;

namespace JohnnyBluhmWeb.Models
{
    public class HeartRateStream
    {
        public Dictionary<string, string> heartRateDict = new Dictionary<string, string>();

        [BsonId]
        public long id;
    }
}
