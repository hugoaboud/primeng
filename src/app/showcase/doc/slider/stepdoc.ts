import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'step-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Size of each movement is defined with the <i>step</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-slider [(ngModel)]="value" [step]="20"></p-slider>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class StepDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: number;

    code: Code = {
        basic: `
<p-slider [(ngModel)]="value" [step]="20"></p-slider>`,

        html: `
<div class="card flex justify-content-center">
    <p-slider [(ngModel)]="value" [step]="20"></p-slider>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './stepdemo.html'
})
export class StepDemo {
    value: number;
}`
    };
}
