using Microsoft.Azure.Documents;

namespace JohnnyBluhmWeb.Models
{
    public class StravaActivity
    {
        public long? resource_state { get; set; }
        public string? name { get; set; }
        public double? distance { get; set; }
        public long? moving_time { get; set; }
        public long? elapsed_time { get; set; }
        public double? total_elevation_gain { get; set; }
        public string? type { get; set; }
        public string? sport_type { get; set; }
        public long? id { get; set; }
        public string? external_id { get; set; }
        public DateTime? start_date { get; set; }
        public DateTime? start_date_local { get; set; }
        public bool? trainer { get; set; }
        public bool? commute { get; set; }
        public bool? manual { get; set; }
        public bool? flagged { get; set; }
        public string? gear_id { get; set; }
        public bool? from_accepted_tag { get; set; }
        public double? average_speed { get; set; }
        public double? max_speed { get; set; }
        public double? average_cadence { get; set; }
        public double? average_watts { get; set; }
        public long? weighted_average_watts { get; set; }
        public double? kilojoules { get; set; }
        public bool? device_watts { get; set; }
        public bool? has_heartrate { get; set; }
        public double? average_heartrate { get; set; }
        public long? max_watts { get; set; }

    }
}
