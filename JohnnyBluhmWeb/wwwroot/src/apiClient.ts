import { DetailedActivity } from "./models/detailedActivity";
import { StravaActivity } from "./models/stravaActivity";
import { Stream } from "./models/stream";

export class StravaApiClient {
    constructor() {

    }
    async getPowerData(): Promise<Stream[]> {
        var url = "https://localhost:7038/api/stravaMongo/GetAllPowerStreams";

        var result = await fetch(url);
        var data = await result.json() as Stream[];
        return data;
    }

    async getHeartRateData(): Promise<Stream[]> {
        var url = "https://localhost:7038/api/stravaMongo/GetAllHrStreams";

        var result = await fetch(url);
        var data = await result.json() as Stream[];
        return data;
    }

    async getActivities(): Promise<StravaActivity[]> {
        var url = "https://localhost:7038/api/stravaMongo/GetAllActivities";
        var result = await fetch(url);
        var data = await result.json() as StravaActivity[];
        return data;
    }

    async getDetailedActivities(): Promise<DetailedActivity[]> {
        var url = "https://localhost:7038/api/stravaMongo/GetAllDetailedActivities";
        var result = await fetch(url);
        var data = await result.json() as DetailedActivity[];
        return data;
    }
}