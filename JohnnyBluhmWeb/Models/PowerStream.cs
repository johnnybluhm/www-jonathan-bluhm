using MongoDB.Bson.Serialization.Attributes;

namespace JohnnyBluhmWeb.Models
{
    public class PowerStream
    {
        public Dictionary<int, int> powerDict = new Dictionary<int, int>();

        [BsonId]
        public long id;
    }
}
