import { Chart, ChartItem } from "chart.js/auto";
import { ChartGenerator } from "./chartGenerator";
import { Stream } from "./models/stream";

export class PowerChartGenerator extends ChartGenerator {

    constructor(data: Stream[]) {
        super();
        this.data = this.GetTimeInZoneList(data);
        this.button = document.getElementById("switch") as HTMLButtonElement;
        this.chartItem = document.getElementById("powerChart") as ChartItem;
    }

    createHoursChart() : void{
        if (this.chart != null || this.chart != undefined) {
            this.chart.destroy();
        }
        this.chart = new Chart(this.chartItem, {
            type: 'bar',
            data: {
                labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5', 'Zone 6', 'Zone 7'],
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

    createMinutesChart() : void{
        if (this.chart != null || this.chart != undefined) {
            this.chart.destroy()
        }
        this.chart = new Chart(this.chartItem, {
            type: 'bar',
            data: {
                labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5', 'Zone 6', 'Zone 7'],
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

    toggleTimeUnits() : void {
        if (this.isMinutes) {
            this.createHoursChart();
            this.button.textContent = "Switch to minutes";
        }
        else {
            this.createMinutesChart();
            this.button.textContent = "Switch to hours";
        }
    }

    private GetTimeInZoneList(powerStreams: Stream[]): number[] {
        let timeInZoneDict: { [index: string]: number } = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0,
        };

        for (var powerStream of powerStreams) {
            for (let key in powerStream.powerDict) {
                let timeAtPowerInSeconds = powerStream.powerDict[key];
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
}