using MongoDB.Bson;

namespace JohnnyBluhmWeb.Models
{
    public class OAuthResponse : BsonValue
    {
        public string token_type { get; set; }
        public string refresh_token { get; set; }
        public string access_token { get; set; }
        public int expires_at { get; set; }
        public int expires_in { get; set; }
        public object athlete { get; set; }

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
