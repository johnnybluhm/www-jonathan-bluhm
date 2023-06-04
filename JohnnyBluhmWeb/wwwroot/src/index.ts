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
    let dateButton = document.getElementById("applyDates") as HTMLButtonElement;
    let fromDate = document.getElementById("fromDate") as HTMLInputElement;
    let toDate = document.getElementById("toDate") as HTMLInputElement;
    let total = document.getElementById("total");
    dateButton.addEventListener("click", () => {
        console.log("ran");
        console.log(fromDate.value)
        console.log(Date.parse(fromDate.value));
        dataCalculator.filterByDate(new Date(fromDate.value), new Date(toDate.value));
        dataCalculator.setTimeInZoneLists();
        console.log(dataCalculator.hrTimeInZone);
        chartProvider.timeInZone = dataCalculator.hrTimeInZone;
        chartProvider.createTimeInZoneChart();
        let totalNum = 0;
        for (let val of chartProvider.timeInZone) {
            totalNum += val;
        }
        totalNum = totalNum / 3600;
        total.textContent = "Total hours: " + totalNum.toString();
    })
}

function addStreamsToActivity(powerStreams: Stream[], hrStreams: Stream[], activities: StravaActivity[]) {
    for (let activity of activities) {
        let hrStreamWithId = hrStreams.find(stream => stream.id == activity.id);
        let powerStreamWithId = powerStreams.find(stream => stream.id == activity.id);
        activity.powerStream = powerStreamWithId?.powerDict;
        activity.hrStream = hrStreamWithId?.heartRateDict;
    }
}

function addDetailsToActivity(activities: StravaActivity[], detailedActivities: DetailedActivity[]) {
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
