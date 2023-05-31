import { Chart, ChartConfiguration, ChartItem, ChartType } from "chart.js/auto";
import { ChartGenerator } from "./chartGenerator";
import { Stream } from "./models/stream";

export class HeartRateChartGenerator extends ChartGenerator {

    constructor(data: Stream[]) {
        super();
        this.data = this.getTimeInZoneList(data);
        this.button = document.getElementById("switchHr") as HTMLButtonElement;
        this.chartItem = document.getElementById("hrChart") as ChartItem;
    }

    createHoursChart(): void {
        if (this.chart != null || this.chart != undefined) {
            this.chart.destroy();
        }
        this.chart = new Chart(this.chartItem, {
            type: 'bar',
            data: {
                labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'],
                datasets: [{
                    label: 'Time in Zone (hours)',
                    data: this.data.map(x => x / 3600),
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
        this.isMinutes = false;
    }

    createMinutesChart(): void {
        if (this.chart != null || this.chart != undefined) {
            this.chart.destroy()
        }
        this.chart = new Chart(this.chartItem, {
            type: 'bar',
            data: {
                labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'],
                datasets: [{
                    label: 'Time in Zone (minutes)',
                    data: this.data.map(x => x / 60),
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        });
        this.isMinutes = true;
    }

    toggleTimeUnits(): void {
        if (this.isMinutes) {
            this.createHoursChart();
        }
        else {
            this.createMinutesChart();
        }
    }

    toggleChartType(): void {
        let chartConfig = this.chart.config as ChartConfiguration;
        if (chartConfig.type == 'pie') {
            this.createHoursChart();
        }
        else {
            this.createPieChart();
        }
    }

    createPieChart(): void {
        if (this.chart != null || this.chart != undefined) {
            this.chart.destroy();
        }
        const data = {
            labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'],
            datasets: [{
                label: 'Time in Zone (hours)',
                data: this.data.map(x => x / 3600),
                hoverOffset: 4
            }]
        };
        this.chart = new Chart(this.chartItem, {
            type: 'pie' as ChartType,
            data: data
        });
        this.isMinutes = false;
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

    getTimeInZoneList(streams: Stream[]): number[] {
        let timeInZoneDict: { [index: string]: number } = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0
        };

        for (var hrStream of streams) {
            for (let key in hrStream.heartRateDict) {
                let timeAtHrInSeconds = hrStream.heartRateDict[key];
                let zone = this.getZone(key);
                let zoneString = zone.toString() as string;
                timeInZoneDict[zoneString] += Number.parseInt(timeAtHrInSeconds);
            }
        }

        return Object.values(timeInZoneDict);
    }
}