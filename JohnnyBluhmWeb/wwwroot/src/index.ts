import { PowerStream } from "./models/powerStream";



async function main() {
    var url = "https://localhost:7038/api/stravaMongo/GetAllPowerStreams";

    var result = await fetch(url);
    var data = await result.json() as PowerStream[];
    console.log(data);
}

main();