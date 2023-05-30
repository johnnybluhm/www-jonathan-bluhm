import { Chart, ChartItem } from "chart.js/auto";

export abstract class ChartGenerator {
    chart: Chart;
    chartItem: ChartItem;
    data: number[];
    button: HTMLButtonElement;
    isMinutes: boolean

    constructor() {
    }

    abstract createHoursChart(): void;

    abstract createMinutesChart(): void;

    abstract toggleTimeUnits(): void;
}