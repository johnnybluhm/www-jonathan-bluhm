using MongoDB.Bson;

namespace JohnnyBluhmWeb.Models
{
    public class ActivityResponse : BsonValue
    {
        public string name { get; set; }
        public string start_date { get; set; }
        public long id { get; set; }

        public override BsonType BsonType => throw new NotImplementedException();

        public override int CompareTo(BsonValue other)
        {
            throw new NotImplementedException();
        }

        public override bool Equals(object obj)
        {
            throw new NotImplementedException();
        }

        public override int GetHashCode()
        {
            throw new NotImplementedException();
        }
    }
}
