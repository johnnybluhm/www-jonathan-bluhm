import { Chart, ChartItem } from "chart.js/auto";

export class ChartGenerator {
    chart: ChartItem;
    data: number[];
    constructor(data: number[]) {
        this.chart = document.getElementById('myChart') as ChartItem;
        this.data = data;
    }

    createHoursChart() {
        new Chart(this.chart, {
            type: 'bar',
            data: {
                labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5', 'Zone 6', 'Zone 7'],
                datasets: [{
                    label: 'Time in Zone (hours)',
                    data: this.data.map(x => x/3600),
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
        console.log("Createing minutes");                                                                                                                                                                     
        new Chart(this.chart, {
            type: 'bar',
            data: {
                labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5', 'Zone 6', 'Zone 7'],
                datasets: [{
                    label: 'Time in Zone (hours)',
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