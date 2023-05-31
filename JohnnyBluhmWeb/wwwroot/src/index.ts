import { Chart } from "chart.js/dist";
import { StravaApiClient } from "./apiClient";
import { ChartGenerator } from "./chartGenerator";
import { HeartRateChartGenerator } from "./heartRateChartGenerator";
import { Stream } from "./models/stream";
import { PowerChartGenerator } from "./powerChartGenerator";


async function main() {
    let button = document.getElementById("switchPower") as HTMLButtonElement;
    let hrButton = document.getElementById("switchHr") as HTMLButtonElement;

    let powerToggleChartButton = document.getElementById("convertPower") as HTMLButtonElement;
    let hrToggleChartButton = document.getElementById("convertHr") as HTMLButtonElement;
    
    let client = new StravaApiClient();
    
    var powerStreams = await client.getPowerData();
    var hrStreams = await client.getHeartRateData();

    console.log(hrStreams);
    console.log(powerStreams);

    let powerChartGenerator = new PowerChartGenerator(powerStreams);
    powerChartGenerator.createPieChart();
    button.addEventListener("click", () => powerChartGenerator.toggleTimeUnits());
    powerToggleChartButton.addEventListener("click", () => powerChartGenerator.toggleChartType());

    let hrChartGenerator = new HeartRateChartGenerator(hrStreams);
    hrChartGenerator.createPieChart();
    hrButton.addEventListener("click", () => hrChartGenerator.toggleTimeUnits());
    hrToggleChartButton.addEventListener("click", () => hrChartGenerator.toggleChartType());

}

(async () => {
    try {
        await main();
    } catch (e) {
        console.error(e);
    }
})();
