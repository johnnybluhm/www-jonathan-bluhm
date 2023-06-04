import { Chart, ChartConfiguration, ChartItem, ChartType } from "chart.js/auto";
import { ChartGenerator } from "./chartGenerator";
import { StravaActivity } from "./models/stravaActivity";
import { Stream } from "./models/stream";
import { TimeInZoneFilter } from "./timeInZoneFilter";
import * as DateHelper from 'date-fns';
import { PowerZone } from "./powerZoneCalculator";
import { HrZone } from "./hrZoneCalculator";

export class DataCalculator {
    allActivities: StravaActivity[];
    filteredActivities: StravaActivity[];

    hrTimeInZone: number[];
    powerTimeInZone: number[]
    caloriesBurnedInTimePeriod: number;

    constructor(activities: StravaActivity[]) {
        this.allActivities = activities;
        this.filteredActivities = activities;
    }

    filterByDate(fromDate: Date, toDate: Date) {
        this.filteredActivities = [];
        for (let activity of this.allActivities) {
            let activityDate = Date.parse(activity.start_date_local);
            if (DateHelper.isAfter(activityDate, fromDate) && DateHelper.isBefore(activityDate, toDate)) {
                this.filteredActivities.push(activity);
            }
        }
        this.setTimeInZoneLists();
    }

    setTimeInZoneLists() {
        this.powerTimeInZone = new PowerZone().getTimeInZoneList(this.filteredActivities);
        this.hrTimeInZone = new HrZone().getTimeInZoneList(this.filteredActivities);
    }
}