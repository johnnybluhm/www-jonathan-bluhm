import { HeartRateStream } from "./models/heartRateStream";
import { PowerStream } from "./models/powerStream";

export class StravaApiClient {
    constructor() {

    }
    async getPowerData(): Promise<PowerStream[]> {
        var url = "https://localhost:7038/api/stravaMongo/GetAllPowerStreams";

        var result = await fetch(url);
        var data = await result.json() as PowerStream[];
        return data;
    }

    async getHeartRateData(): Promise<HeartRateStream[]> {
        var url = "https://localhost:7038/api/stravaMongo/GetAllHrStreams";

        var result = await fetch(url);
        var data = await result.json() as HeartRateStream[];
        return data;
    }
}