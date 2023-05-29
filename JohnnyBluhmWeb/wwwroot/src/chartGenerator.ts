import { Chart, ChartItem } from "chart.js/auto";
import { isNull } from "node:util";

export class ChartGenerator {
    powerChart: Chart;
    chartItem: ChartItem;
    data: number[];
    constructor(data: number[]) {
        this.chartItem = document.getElementById('myChart') as ChartItem;
        this.data = data;
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
            }
        });
    }
}