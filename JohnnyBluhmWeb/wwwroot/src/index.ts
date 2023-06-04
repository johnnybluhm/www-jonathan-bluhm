import { Chart } from "chart.js/dist";
import { StravaApiClient } from "./apiClient";
import { ChartGenerator } from "./chartGenerator";
import { HeartRateChartGenerator } from "./heartRateChartGenerator";
import { DataCalculator } from "./dataCalculator";
import { StravaActivity } from "./models/stravaActivity";
import { Stream } from "./models/stream";
import * as DateHelper from "date-fns";
import { DetailedActivity } from "./models/detailedActivity";


async function main() {
    //let button = document.getElementById("switchPower") as HTMLButtonElement;
    //let hrButton = document.getElementById("switchHr") as HTMLButtonElement;

    let powerToggleChartButton = document.getElementById("convertPower") as HTMLButtonElement;
    let hrToggleChartButton = document.getElementById("convertHr") as HTMLButtonElement;

    let client = new StravaApiClient();

    var powerStreams = await client.getPowerData();
    var hrStreams = await client.getHeartRateData();

    var activities = await client.getActivities();

    var detailedActivities = await client.getDetailedActivities();
    console.log(activities);
    console.log(detailedActivities);
    console.log(hrStreams);
    console.log(powerStreams);

    /*let powerChartGenerator = new PowerChartGenerator(powerStreams);
    powerChartGenerator.createPieChart();
    //button.addEventListener("click", () => powerChartGenerator.toggleTimeUnits());
    powerToggleChartButton.addEventListener("click", () => powerChartGenerator.toggleChartType());

    let hrChartGenerator = new HeartRateChartGenerator(hrStreams, activities);
    hrChartGenerator.createPieChart();
    //hrButton.addEventListener("click", () => hrChartGenerator.toggleTimeUnits());
    hrToggleChartButton.addEventListener("click", () => hrChartGenerator.toggleChartType());*/

    addStreamsToActivity(powerStreams, hrStreams, activities);
    addDetailsToActivity(activities, detailedActivities);
    console.log(activities);
    let dataCalculator = new DataCalculator(activities);
    dataCalculator.setTimeInZoneLists();

    
    //dataCalculator.filterByDate(new Date(2023, 0).toString(), new Date(2023, 6).toString());
    dataCalculator.filterByDate(DateHelper.subDays(new Date(), 30), new Date());
    dataCalculator.setCaloriesBurned();
    console.log(dataCalculator.caloriesBurnedInTimePeriod);
    //console.log(filtered30days);
    dataCalculator.filterByDate(DateHelper.subDays(new Date(), 90), new Date());
    let filtered90days = dataCalculator.hrTimeInZone;
    console.log("After 90 days filter");
    dataCalculator.setCaloriesBurned();
    console.log(dataCalculator.caloriesBurnedInTimePeriod);
    console.log(filtered90days);
    dataCalculator.filterByDate(DateHelper.subYears(new Date(), 1), new Date());
    let filtered1year = dataCalculator.hrTimeInZone;
    console.log("After 1 year filter");
    dataCalculator.setCaloriesBurned();
    console.log(dataCalculator.caloriesBurnedInTimePeriod);
    console.log(filtered1year);
    dataCalculator.filterByDate(DateHelper.subYears(new Date(), 5), new Date());
    let filteredAllTime = dataCalculator.hrTimeInZone;
    console.log("All time");
    dataCalculator.setCaloriesBurned();
    console.log(dataCalculator.caloriesBurnedInTimePeriod);
    console.log(filteredAllTime);
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
