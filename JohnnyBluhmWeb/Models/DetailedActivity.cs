using Newtonsoft.Json;

namespace JohnnyBluhmWeb.Models
{

    public class Lap
    {
        public long id { get; set; }
        public long resource_state { get; set; }
        public string name { get; set; }
        public long elapsed_time { get; set; }
        public long moving_time { get; set; }
        public DateTime start_date { get; set; }
        public DateTime start_date_local { get; set; }
        public double distance { get; set; }
        public long start_index { get; set; }
        public long end_index { get; set; }
        public double total_elevation_gain { get; set; }

        public double average_speed { get; set; }
        public double max_speed { get; set; }
        public double average_cadence { get; set; }
        public bool device_watts { get; set; }
        public double average_watts { get; set; }
        public long lap_index { get; set; }
        public long split { get; set; }
    }



    public class DetailedActivity
    {
        public long id { get; set; }
        public long resource_state { get; set; }
        public string external_id { get; set; }
        public string name { get; set; }
        public double distance { get; set; }
        public long moving_time { get; set; }
        public long elapsed_time { get; set; }
        public double total_elevation_gain { get; set; }
        public string type { get; set; }
        public string sport_type { get; set; }
        public DateTime start_date { get; set; }
        public DateTime start_date_local { get; set; }
        public string timezone { get; set; }
        public List<double> start_latlng { get; set; }
        public List<double> end_latlng { get; set; }
        public long achievement_count { get; set; }
        public long kudos_count { get; set; }
        public long comment_count { get; set; }
        public long athlete_count { get; set; }
        public long photo_count { get; set; }
        public bool trainer { get; set; }
        public bool commute { get; set; }
        public bool manual { get; set; }
        public bool @private { get; set; }
        public bool flagged { get; set; }
        public string gear_id { get; set; }
        public bool from_accepted_tag { get; set; }
        public double average_speed { get; set; }
        public double max_speed { get; set; }
        public double average_cadence { get; set; }
        public long average_temp { get; set; }
        public double average_watts { get; set; }
        public long weighted_average_watts { get; set; }
        public double kilojoules { get; set; }
        public bool device_watts { get; set; }
        public bool has_heartrate { get; set; }
        public long max_watts { get; set; }
        public double elev_high { get; set; }
        public double elev_low { get; set; }
        public long pr_count { get; set; }
        public long total_photo_count { get; set; }
        public bool has_kudoed { get; set; }
        public string description { get; set; }
        public double calories { get; set; }
        public List<SplitsMetric> splits_metric { get; set; }
        public List<Lap> laps { get; set; }
        public object partner_brand_tag { get; set; }
        public bool hide_from_home { get; set; }
        public string device_name { get; set; }
        public string embed_token { get; set; }
        public bool segment_leaderboard_opt_out { get; set; }
        public bool leaderboard_opt_out { get; set; }

        [JsonIgnore]
        public long? workout_type { get; set; }

        [JsonIgnore]
        public long? suffer_score { get; set; }
    }
    public class SplitsMetric
    {
        public double distance { get; set; }
        public long elapsed_time { get; set; }
        public double elevation_difference { get; set; }
        public long moving_time { get; set; }
        public long split { get; set; }
        public double average_speed { get; set; }
        public long pace_zone { get; set; }
    }

}
