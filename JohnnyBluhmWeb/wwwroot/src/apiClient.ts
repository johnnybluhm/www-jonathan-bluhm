import { Stream } from "./models/stream";
import { HeartRateStream } from "./models/heartRateStream";
import { PowerStream } from "./models/powerStream";

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
}