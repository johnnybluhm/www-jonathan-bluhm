namespace JohnnyBluhmWeb.Models
{
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
    public class Altitude
    {
        public List<double> data { get; set; }
        public string series_type { get; set; }
        public int original_size { get; set; }
        public string resolution { get; set; }
    }

    public class Distance
    {
        public List<double> data { get; set; }
        public string series_type { get; set; }
        public int original_size { get; set; }
        public string resolution { get; set; }
    }

    public class Heartrate
    {
        public List<int> data { get; set; }
        public string series_type { get; set; }
        public int original_size { get; set; }
        public string resolution { get; set; }
    }

    public class ActivityStream
    {
        public Watts watts { get; set; }
        public Distance distance { get; set; }
        public Heartrate heartrate { get; set; }
        public Altitude altitude { get; set; }
    }

    public class Watts
    {
        public List<int?> data { get; set; }
        public string series_type { get; set; }
        public int original_size { get; set; }
        public string resolution { get; set; }
    }


}
