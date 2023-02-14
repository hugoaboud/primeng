import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'minmax-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Boundaries are configured with the <i>min</i> and <i>max</i> properties whose defaults are 0 and 100 respectively.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-knob [(ngModel)]="value" [min]="-50" [max]="50"></p-knob>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class MinMaxDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: number = 10;

    code: Code = {
        basic: `
<p-knob [(ngModel)]="value" [min]="-50" [max]="50"></p-knob>`,

        html: `
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" [min]="-50" [max]="50"></p-knob>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './knobdemo.html'
})

export class KnobDemo {
    value: number = 10;
}`
    };
}
