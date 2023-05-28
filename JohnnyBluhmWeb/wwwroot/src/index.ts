import { PowerStream } from "./models/powerStream";
let globalModel: { [index: string]: number } = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
} ;
async function getPowerData() : Promise<PowerStream[]> {
    var url = "https://localhost:7038/api/stravaMongo/GetAllPowerStreams";

    var result = await fetch(url);
    var data = await result.json() as PowerStream[];
    console.log(data);
    return data;
}

async function main() {
    var powerStreams = await getPowerData();
    for (var powerStream of powerStreams) {
        for (let key in powerStream.powerDict) {
            let timeAtPowerInSeconds = powerStream.powerDict[key];
            let zone = getZone(key);
            let zoneString = zone.toString() as string;
            globalModel[zoneString] += Number.parseInt(timeAtPowerInSeconds);
        }
    }
    console.log(globalModel);
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
    else if (powerAsNumber > 288 && powerAsNumber <=360) {
        return 6;
    }
    else if (powerAsNumber <= 360) {
        return 7;
    }
    return 1;
}
main();




