import { Chart, ChartItem } from "chart.js/auto";

export abstract class ChartGenerator {
    powerChart: Chart;
    chartItem: ChartItem;
    data: number[];
    button: HTMLButtonElement;
    isMinutes: boolean

    constructor(data: number[]) {
        this.data = data;
    }

    abstract createHoursChart(): void;

    abstract createMinutesChart(): void;

    abstract toggleTimeUnits(): void;
}