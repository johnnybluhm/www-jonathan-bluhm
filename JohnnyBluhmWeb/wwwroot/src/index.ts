import { PowerStream } from "./models/powerStream";
var globalModel = {};
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
            let value = powerStream.powerDict[key];

        }
    }
}

function getZone() : void{

}




