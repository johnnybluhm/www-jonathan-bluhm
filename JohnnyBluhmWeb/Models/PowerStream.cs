using MongoDB.Bson.Serialization.Attributes;

namespace JohnnyBluhmWeb.Models
{
    public class PowerStream
    {
        public Dictionary<string, string> powerDict = new Dictionary<string, string>();

        [BsonId]
        public long id;
    }
}
