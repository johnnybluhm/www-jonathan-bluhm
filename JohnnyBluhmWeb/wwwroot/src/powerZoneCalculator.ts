import { Chart, ChartConfiguration, ChartItem, ChartType, ChartTypeRegistry } from "chart.js/auto";
import { ChartGenerator } from "./chartGenerator";
import { StravaActivity } from "./models/stravaActivity";
import { Stream } from "./models/stream";

export class PowerZone {
    powerZones: number[];

    public getTimeInZoneList(activities: StravaActivity[]): number[] {
        let timeInZoneDict: { [index: string]: number } = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0,
        };
        for (let activity of activities) {
            for (let key in activity.powerStream) {
                let timeAtPowerInSeconds = activity.powerStream[key];
                let zone = this.getZone(key);
                let zoneString = zone.toString() as string;
                timeInZoneDict[zoneString] += Number.parseInt(timeAtPowerInSeconds);
            }
        }

        return Object.values(timeInZoneDict);
    }

    private getZone(power: string): number {
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

    private setPowerZones(ftp: number) {
        this.powerZones[0] = ftp * .55;
        this.powerZones[1] = ftp * .75;
        this.powerZones[2] = ftp * .87;
        this.powerZones[3] = ftp * 1.05;
        this.powerZones[4] = ftp * 1.2;
        this.powerZones[5] = ftp * 1.5;
        this.powerZones[6] = ftp * 2;
    }
}