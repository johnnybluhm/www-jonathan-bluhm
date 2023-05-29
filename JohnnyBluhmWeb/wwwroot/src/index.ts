import * as chartJs from "chart.js";
import { PowerStream } from "./models/powerStream";
import Chart from 'chart.js/auto';
import { StravaApiClient } from "./apiClient";

async function main() {

    let client = new StravaApiClient();
    var powerStreams = await client.getPowerData();
    const ctx = document.getElementById('myChart') as chartJs.ChartItem;

    var timeInZoneList = GetTimeInZoneList(powerStreams);
    var dataInMinutes = timeInZoneList.map(x => x / 60 /60);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5', 'Zone 6', 'Zone 7'],
            datasets: [{
                label: 'Time in Zone (hours)',
                data: dataInMinutes,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function getZone(power: string) : number{
    var powerAsNumber = Number.parseInt(power);
    if (powerAsNumber <= 132) {
        return 1;
    }
    else if (powerAsNumber > 132 && powerAsNumber <= 180) {
        return 2;
    }
    else if (powerAsNumber > 180 && powerAsNumber <= 216) {
        return 3;
    }
    else if (powerAsNumber > 216 && powerAsNumber <= 252) {
        return 4;
    }
    else if (powerAsNumber > 252 && powerAsNumber <= 288) {
        return 5;
    }
    else if (powerAsNumber > 288 && powerAsNumber <= 360) {
        return 6;
    }
    else if (powerAsNumber >= 360) {
        return 7;
    }
    return 1;
}

function GetTimeInZoneList(powerStreams: PowerStream[]): number[] {
    let timeInZoneDict: { [index: string]: number } = {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
    };

    for (var powerStream of powerStreams) {
        for (let key in powerStream.powerDict) {
            let timeAtPowerInSeconds = powerStream.powerDict[key];
            let zone = getZone(key);
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
