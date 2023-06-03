import { Chart, ChartConfiguration, ChartItem, ChartType, ChartTypeRegistry } from "chart.js/auto";
import { ChartGenerator } from "./chartGenerator";
import { StravaActivity } from "./models/stravaActivity";
import { Stream } from "./models/stream";

export class HrZone {
    hrZones: number[];

    public getTimeInZoneList(activities: StravaActivity[]): number[] {
        let timeInZoneDict: { [index: string]: number } = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
        };
        for (let activity of activities) {
            for (let key in activity.hrStream) {
                let timeAtPowerInSeconds = activity.hrStream[key];
                let zone = this.getZone(key);
                let zoneString = zone.toString() as string;
                timeInZoneDict[zoneString] += Number.parseInt(timeAtPowerInSeconds);
            }
        }

        return Object.values(timeInZoneDict);
    }

    getZone(heartRate: string): number {
        var powerAsNumber = Number.parseInt(heartRate);
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

    private setHrZones(maxHr: number) {
        this.hrZones[0] = maxHr * .5;
        this.hrZones[1] = maxHr * .6;
        this.hrZones[2] = maxHr * .7;
        this.hrZones[3] = maxHr * .8;
        this.hrZones[4] = maxHr * .9;
    }

}