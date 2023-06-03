import { Chart, ChartConfiguration, ChartItem, ChartType } from "chart.js/auto";
import { ChartGenerator } from "./chartGenerator";
import { StravaActivity } from "./models/stravaActivity";
import { Stream } from "./models/stream";
import { TimeInZoneFilter } from "./timeInZoneFilter";
import * as DateHelper from 'date-fns';

export class DataCalculator {
    allActivities: StravaActivity[];
    filteredActivities: StravaActivity[];
    hrZones: number[];
    powerZones: number[];
    hrTimeInZone: number[];
    powerTimeInZone: number[];
    caloriesBurnedInTimePeriod: number;

    constructor(data: Stream[], activities: StravaActivity[]) {
        this.allActivities = activities;
        this.addStreamsToActivities(data);
    }

    filterByDate(fromDateString: string, untilDateString: string) {
        /*let fromDate = Date.parse(fromDateString);
        let untilDate = Date.parse(untilDateString);
        this.filteredStreams = [];
        this.filteredActivities = [];
        let streamsInDateRange = [] as Stream[];
        for (let stream of this.allStreams) {
            var activityThatContainsStream = this.allActivities.find(e => e.id == stream.id);
            var activityDate = Date.parse(activityThatContainsStream.start_date_local);
            if (DateHelper.isAfter(activityDate, fromDate) && DateHelper.isBefore(activityDate, untilDate)) {
                this.filteredStreams.push(stream);
                this.filteredActivities.push(activityThatContainsStream);
            }
        }
        return streamsInDateRange;*/
    }

    private addStreamsToActivities(streams: Stream[]) {
        for (let activity of this.allActivities) {
            //activity.stream = streams.find(e => e.id == activity.id && e.);
        }
    }

    private getHrZones(maxHr: number) {
        this.hrZones[0] = maxHr * .5;
        this.hrZones[1] = maxHr * .6;
        this.hrZones[2] = maxHr * .7;
        this.hrZones[3] = maxHr * .8;
        this.hrZones[4] = maxHr * .9;
    }

    private getPowerZones(ftp: number) {
        this.hrZones[0] = ftp * .55;
        this.hrZones[1] = ftp * .75;
        this.hrZones[2] = ftp * .87;
        this.hrZones[3] = ftp * 1.05;
        this.hrZones[4] = ftp * 1.2;
        this.hrZones[5] = ftp * 1.5;
        this.hrZones[6] = ftp * 2;
    }
}