"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let globalModel = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
};
function getPowerData() {
    return __awaiter(this, void 0, void 0, function* () {
        var url = "https://localhost:7038/api/stravaMongo/GetAllPowerStreams";
        var result = yield fetch(url);
        var data = yield result.json();
        console.log(data);
        return data;
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var powerStreams = yield getPowerData();
        for (var powerStream of powerStreams) {
            for (let key in powerStream.powerDict) {
                let timeAtPowerInSeconds = powerStream.powerDict[key];
                let zone = getZone(key);
                let zoneString = zone.toString();
                globalModel[zoneString] += Number.parseInt(timeAtPowerInSeconds);
            }
        }
    });
}
function getZone(power) {
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
    else if (powerAsNumber <= 360) {
        return 7;
    }
    return 1;
}
main();
