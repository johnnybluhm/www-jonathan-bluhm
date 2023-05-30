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



function getHrZone(power: string): number {
    var powerAsNumber = Number.parseInt(power);
    if (powerAsNumber <= 118) {
        return 1;
    }
    else if (powerAsNumber > 118 && powerAsNumber <= 156) {
        return 2;
    }
    else if (powerAsNumber > 156 && powerAsNumber <= 175) {
        return 3;
    }
    else if (powerAsNumber > 175 && powerAsNumber <= 194) {
        return 4;
    }
    else if (powerAsNumber > 194) {
        return 5;
    }
    return 1;
}



function GetTimeInZoneListHR(powerStreams: Stream[]): number[] {
    let timeInZoneDict: { [index: string]: number } = {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0
    };

    for (var powerStream of powerStreams) {
        for (let key in powerStream.heartRateDict) {
            let timeAtPowerInSeconds = powerStream.heartRateDict[key];
            let zone = getHrZone(key);
            let zoneString = zone.toString() as string;
            timeInZoneDict[zoneString] += Number.parseInt(timeAtPowerInSeconds);
        }
    }

    return Object.values(timeInZoneDict);
}

(async () => {
    try {
        await main();
    } catch (e) {
        console.error(e);
    }
})();
