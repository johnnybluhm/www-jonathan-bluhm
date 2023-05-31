import { Chart } from "chart.js/dist";
import { StravaApiClient } from "./apiClient";
import { ChartGenerator } from "./chartGenerator";
import { Stream } from "./models/stream";
import { PowerChartGenerator } from "./powerChartGenerator";

let chartGenerator: PowerChartGenerator;

async function main() {
    let button = document.getElementById("switch") as HTMLButtonElement;
    
    let client = new StravaApiClient();
    
    var powerStreams = await client.getPowerData();
    var hrStreams = await client.getHeartRateData();

    console.log(hrStreams);
    console.log(powerStreams);

    chartGenerator = new PowerChartGenerator(powerStreams);
    chartGenerator.createPieChart();
    button.addEventListener("click", () => chartGenerator.toggleTimeUnits())
}

(async () => {
    try {
        await main();
    } catch (e) {
        console.error(e);
    }
})();
