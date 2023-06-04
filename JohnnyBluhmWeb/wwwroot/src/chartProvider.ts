import { Chart, ChartConfiguration, ChartItem, ChartType } from "chart.js/auto";
import { ChartGenerator } from "./chartGenerator";
import { StravaActivity } from "./models/stravaActivity";
import { Stream } from "./models/stream";
import { TimeInZoneFilter } from "./timeInZoneFilter";
import * as DateHelper from 'date-fns';

export class ChartProvider  {
    button: HTMLButtonElement;
    chartItem: ChartItem;
    chart: Chart;
    timeInZone: number[];
    constructor() {
        this.button = document.getElementById("switchHr") as HTMLButtonElement;
        this.chartItem = document.getElementById("hrChart") as ChartItem;
    }

    createTimeInZoneChart(): void {
        if (this.chart != null || this.chart != undefined) {
            this.chart.destroy();
        }
        this.chart = new Chart(this.chartItem, {
            type: 'bar',
            data: {
                labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'],
                datasets: [{
                    label: 'Time in Zone (hours)',
                    data: this.timeInZone.map(x => x / 3600),
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}