import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'disabled-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
        </app-docsectiontext>
        <div class="card flex flex-column gap-3 align-items-center">
            <p-triStateCheckbox [(ngModel)]="value" [disabled]="true"></p-triStateCheckbox>
            <label>{{ value === null ? 'null' : value }}</label>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DisabledDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: string;

    code: Code = {
        basic: `
<p-triStateCheckbox [(ngModel)]="value" [disabled]="true"></p-triStateCheckbox>`,

        html: `
<div class="card flex flex-column gap-3 align-items-center">
    <p-triStateCheckbox [(ngModel)]="value" [disabled]="true"></p-triStateCheckbox>
    <label>{{value == null ? 'null' : value}}</label>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './disableddemo.html'
})
export class DisabledDemo {
    value: string;
}`
    };
}
