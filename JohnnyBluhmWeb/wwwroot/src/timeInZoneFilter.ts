import { StravaActivity } from "./models/stravaActivity";
import { Stream } from "./models/stream";
import * as DateHelper from 'date-fns';

export class TimeInZoneFilter {
    activities: StravaActivity[];

    constructor(data: StravaActivity[]) {
        this.activities = data;
    }

    filterByDate(fromDateString: string, untilDateString: string, streams: Stream[]) : Stream[] {
        let fromDate = Date.parse(fromDateString);
        let untilDate = Date.parse(untilDateString);
        let streamsInDateRange = [] as Stream[];
        for (let stream of streams) {
            var activityThatContainsStream = this.activities.find(e => e.id == stream.id);
            var activityDate = Date.parse(activityThatContainsStream.start_date_local);
            if (DateHelper.isAfter(activityDate, fromDate) && DateHelper.isBefore(activityDate, untilDate)) {
                streamsInDateRange.push(stream);
            }
        }
        return streamsInDateRange;
    }
}