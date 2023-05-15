﻿using MongoDB.Bson;

namespace JohnnyBluhmWeb.Models
{
    public class OAuthResponse
    {
        public string token_type { get; set; }
        public string refresh_token { get; set; }
        public string access_token { get; set; }
        public int expires_at { get; set; }
        public int expires_in { get; set; }
        public object athlete { get; set; }
    }
}
