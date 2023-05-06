namespace JohnnyBluhmWeb.Models
{
    public class OAuthResponse
    {
        public string token_type;
        public string refresh_token;
        public string access_token;
        public int expires_at;
        public int expires_in;
        public object athlete;
    }
}
