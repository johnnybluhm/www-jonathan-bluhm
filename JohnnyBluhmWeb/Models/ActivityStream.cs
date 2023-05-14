namespace JohnnyBluhmWeb.Models
{
    public class ActivityStream
    {
            public string type { get; set; }
            public List<double> data { get; set; }
            public string series_type { get; set; }
            public int original_size { get; set; }
            public string resolution { get; set; }
    }
}
