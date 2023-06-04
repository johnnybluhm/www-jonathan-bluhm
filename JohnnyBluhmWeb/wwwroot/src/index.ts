import { Chart } from "chart.js/dist";
import { StravaApiClient } from "./apiClient";
import { ChartGenerator } from "./chartGenerator";
import { HeartRateChartGenerator } from "./heartRateChartGenerator";
import { DataCalculator } from "./dataCalculator";
import { StravaActivity } from "./models/stravaActivity";
import { Stream } from "./models/stream";
import * as DateHelper from "date-fns";
import { DetailedActivity } from "./models/detailedActivity";
import { ChartProvider } from "./chartProvider";


async function main() {
    let client = new StravaApiClient();

    var powerStreams = await client.getPowerData();
    var hrStreams = await client.getHeartRateData();

    var activities = await client.getActivities();

    var detailedActivities = await client.getDetailedActivities();

    let chartProvider = new ChartProvider();

    addStreamsToActivity(powerStreams, hrStreams, activities);
    addDetailsToActivity(activities, detailedActivities);

    console.log(activities);
    let dataCalculator = new DataCalculator(activities);
    dataCalculator.setTimeInZoneLists();

    chartProvider.timeInZone = dataCalculator.hrTimeInZone;

    chartProvider.createTimeInZoneChart();
}

function addStreamsToActivity(powerStreams: Stream[], hrStreams: Stream[], activities: StravaActivity[]) {
    for (let activity of activities) {
        let hrStreamWithId = hrStreams.find(stream => stream.id == activity.id);
        let powerStreamWithId = powerStreams.find(stream => stream.id == activity.id);
        activity.powerStream = powerStreamWithId?.powerDict;
        activity.hrStream = hrStreamWithId?.heartRateDict;
    }
}

function addDetailsToActivity(activities: StravaActivity[], detailedActivities : DetailedActivity[]) {
    for (let activity of activities) {
        let details = detailedActivities.find(e => e.id == activity.id);
        activity.details = details;
    }
}

(async () => {
    try {
        await main();
    } catch (e) {
        console.error(e);
    }
})();
