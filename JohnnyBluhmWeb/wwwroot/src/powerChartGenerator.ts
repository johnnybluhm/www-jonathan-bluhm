import { Chart, ChartItem } from "chart.js/auto";
import { ChartGenerator } from "./chartGenerator";

export class PowerChartGenerator extends ChartGenerator{
    constructor(data: number[]) {
        super(data);
    }

    createHoursChart() {
        if (this.powerChart != null || this.powerChart != undefined) {
            this.powerChart.destroy();
        }
        this.powerChart = new Chart(this.chartItem, {
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

    createMinutesChart() {
        if (this.powerChart != null || this.powerChart != undefined) {
            this.powerChart.destroy()
        }
        this.powerChart = new Chart(this.chartItem, {
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

    toggleTimeUnits() {
        if (this.isMinutes) {
            this.createHoursChart();
            this.button.textContent = "Switch to minutes";
        }
        else {
            this.createMinutesChart();
            this.button.textContent = "Switch to hours";
        }
    }
}