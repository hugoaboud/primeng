import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'withoutcancel-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A cancel icon is displayed to reset the value by default, set <i>cancel</i> as false to remove this option.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-rating [(ngModel)]="value" [cancel]="false"></p-rating>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class WithoutCancelDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: number;

    code: Code = {
        basic: `
<p-rating [(ngModel)]="value" [cancel]="false"></p-rating>`,

        html: `
<div class="card flex justify-content-center">
    <p-rating [(ngModel)]="value" [cancel]="false"></p-rating>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './ratingdemo.html'
})
export class RatingDemo {
    value: number;
}`
    };
}
