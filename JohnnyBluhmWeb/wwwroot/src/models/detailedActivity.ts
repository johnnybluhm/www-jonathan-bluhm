export interface Lap {
    id: number;
    resource_state: number;
    name: string;
    elapsed_time: number;
    moving_time: number;
    start_date: string;
    start_date_local: string;
    distance: number;
    start_index: number;
    end_index: number;
    total_elevation_gain: number;
    average_speed: number;
    max_speed: number;
    average_cadence: number;
    device_watts: boolean;
    average_watts: number;
    lap_index: number;
    split: number;
}

export interface DetailedActivity {
    id: number;
    resource_state: number;
    external_id: string;
    name: string;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    total_elevation_gain: number;
    type: string;
    sport_type: string;
    start_date: string;
    start_date_local: string;
    timezone: string;
    start_latlng: number[];
    end_latlng: number[];
    achievement_count: number;
    kudos_count: number;
    comment_count: number;
    athlete_count: number;
    photo_count: number;
    trainer: boolean;
    commute: boolean;
    manual: boolean;
    private: boolean;
    flagged: boolean;
    gear_id: string;
    from_accepted_tag: boolean;
    average_speed: number;
    max_speed: number;
    average_cadence: number;
    average_temp: number;
    average_watts: number;
    weighted_average_watts: number;
    kilojoules: number;
    device_watts: boolean;
    has_heartrate: boolean;
    max_watts: number;
    elev_high: number;
    elev_low: number;
    pr_count: number;
    total_photo_count: number;
    has_kudoed: boolean;
    description: string;
    calories: number;
    splits_metric: SplitsMetric[];
    laps: Lap[];
    partner_brand_tag: any;
    hide_from_home: boolean;
    device_name: string;
    embed_token: string;
    segment_leaderboard_opt_out: boolean;
    leaderboard_opt_out: boolean;
}

export interface SplitsMetric {
    distance: number;
    elapsed_time: number;
    elevation_difference: number;
    moving_time: number;
    split: number;
    average_speed: number;
    pace_zone: number;
}