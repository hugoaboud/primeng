import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'polararea-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-chart type="polarArea" [data]="data" [options]="options"></p-chart>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class PolarAreaDocComponent {
    @Input() id: string;

    @Input() title: string;

    data!: any;

    options!: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            datasets: [
                {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--bluegray-500'),
                        documentStyle.getPropertyValue('--blue-500')
                    ],
                    label: 'My dataset'
                }
            ],
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
        };

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }

    code: Code = {
        basic: `
<p-chart type="polarArea" [data]="data" [options]="options"></p-chart>`,
        html: `
<div class="card flex justify-content-center">
    <p-chart type="polarArea" [data]="data" [options]="options"></p-chart>
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
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            datasets: [
                {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--bluegray-500'),
                        documentStyle.getPropertyValue('--blue-500')
                    ],
                    label: 'My dataset'
                }
            ],
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
        };
        
        this.options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
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
