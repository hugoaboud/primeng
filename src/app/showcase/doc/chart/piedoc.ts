import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'pie-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A pie chart is a circular statistical graphic which is divided into slices to illustrate numerical proportion.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-chart type="pie" [data]="data" [options]="options"></p-chart>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class PieDocComponent {
    @Input() id: string;

    @Input() title: string;

    data!: any;

    options!: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
    }

    code: Code = {
        basic: `
<p-chart type="pie" [data]="data" [options]="options"></p-chart>`,
        html: `
<div class="card flex justify-content-center">
    <p-chart type="pie" [data]="data" [options]="options"></p-chart>
</div>`,
        typescript: `
import { Component } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    templateUrl: './chartdemo.html'
})
export class ChartDemo {

    data!: any;

    options!: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
    }
}`,
        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartDemo } from './chartdemo';

@NgModule({
    imports: [CommonModule, ChartModule],
    declarations: [ChartDemo]
})
export class ChartDemoModule {}`
    };
}
