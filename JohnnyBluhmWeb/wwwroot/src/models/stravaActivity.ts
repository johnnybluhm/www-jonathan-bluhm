import { Stream } from "./stream";

export interface StravaActivity {
    resource_state: number | null;
    name: string | null;
    distance: number | null;
    moving_time: number | null;
    elapsed_time: number | null;
    total_elevation_gain: number | null;
    type: string | null;
    sport_type: string | null;
    id: number | null;
    external_id: string | null;
    start_date: string | null;
    start_date_local: string | null;
    trainer: boolean | null;
    commute: boolean | null;
    manual: boolean | null;
    flagged: boolean | null;
    gear_id: string | null;
    from_accepted_tag: boolean | null;
    average_speed: number | null;
    max_speed: number | null;
    average_cadence: number | null;
    average_watts: number | null;
    weighted_average_watts: number | null;
    kilojoules: number | null;
    device_watts: boolean | null;
    has_heartrate: boolean | null;
    average_heartrate: number | null;
    max_watts: number | null;
    hrStream: { [key: string]: string; } | null;
    powerStream: { [key: string]: string; } | null;
}