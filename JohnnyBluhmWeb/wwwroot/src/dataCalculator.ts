import { Chart, ChartConfiguration, ChartItem, ChartType } from "chart.js/auto";
import { ChartGenerator } from "./chartGenerator";
import { StravaActivity } from "./models/stravaActivity";
import { Stream } from "./models/stream";
import { TimeInZoneFilter } from "./timeInZoneFilter";
import * as DateHelper from 'date-fns';
import { PowerZone } from "./powerZoneCalculator";

export class DataCalculator {
    allActivities: StravaActivity[];
    filteredActivities: StravaActivity[];
    hrZones: number[];

    hrTimeInZone: number[];
    powerTimeInZone: number[]
    caloriesBurnedInTimePeriod: number;

    constructor(activities: StravaActivity[]) {
        this.allActivities = activities;
        this.filteredActivities = activities;
    }

    filterByDate(fromDateString: string, toDateString: string) {
        let fromDate = Date.parse(fromDateString);
        let toDate = Date.parse(toDateString);
        this.filteredActivities = [];
        for (let activity of this.allActivities) {
            var activityDate = Date.parse(activity.start_date_local);
            if (DateHelper.isAfter(activityDate, fromDate) && DateHelper.isBefore(activityDate, toDate)) {
                this.filteredActivities.push(activity);
            }
        }
    }

    setTimeInZoneLists() {
        this.powerTimeInZone = new PowerZone().getTimeInZoneList(this.filteredActivities);
    }

    private getHrZones(maxHr: number) {
        this.hrZones[0] = maxHr * .5;
        this.hrZones[1] = maxHr * .6;
        this.hrZones[2] = maxHr * .7;
        this.hrZones[3] = maxHr * .8;
        this.hrZones[4] = maxHr * .9;
    }
}