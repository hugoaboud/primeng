import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'range-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>range</i> property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-slider [(ngModel)]="rangeValues" [range]="true"></p-slider>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class RangeDocComponent {
    @Input() id: string;

    @Input() title: string;

    rangeValues: number[] = [20, 80];

    code: Code = {
        basic: `
<p-slider [(ngModel)]="rangeValues" [range]="true"></p-slider>`,

        html: `
<div class="card flex justify-content-center">
    <p-slider [(ngModel)]="rangeValues" [range]="true"></p-slider>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './rangedemo.html'
})
export class RangeDemo {
    rangeValues: number[] = [20, 80];
}`
    };
}
