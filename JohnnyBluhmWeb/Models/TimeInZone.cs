namespace JohnnyBluhmWeb.Models
{
    public class TimeInZone
    {
        public DateTime start { get; set; }
        public DateTime end { get; set; }
        public Dictionary<int, int> powerDict = new Dictionary<int, int>();
        public Dictionary<int, int> heartRateDict = new Dictionary<int, int>();
    }
}
