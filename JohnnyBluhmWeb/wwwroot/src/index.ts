import { Chart } from "chart.js/dist";
import { StravaApiClient } from "./apiClient";
import { ChartGenerator } from "./chartGenerator";
import { HeartRateChartGenerator } from "./heartRateChartGenerator";
import { DataCalculator } from "./mainModel";
import { StravaActivity } from "./models/stravaActivity";
import { Stream } from "./models/stream";
import { PowerChartGenerator } from "./powerChartGenerator";


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
    console.log("before:");
    console.log(activities);
    addStreamsToActivity(powerStreams, hrStreams, activities);
    console.log("after:");
    console.log(activities);
    //let test = new DataCalculator(powerStreams.concat(hrStreams), activities);

}

function addStreamsToActivity(powerStreams: Stream[], hrStreams: Stream[], activities: StravaActivity[]) {
    for (let activity of activities) {
        let hrStreamWithId = hrStreams.find(stream => stream.id == activity.id);
        let powerStreamWithId = powerStreams.find(stream => stream.id == activity.id);
        activity.powerStream = powerStreamWithId?.powerDict;
        activity.hrStream = hrStreamWithId?.heartRateDict;
    }
}

(async () => {
    try {
        await main();
    } catch (e) {
        console.error(e);
    }
})();
