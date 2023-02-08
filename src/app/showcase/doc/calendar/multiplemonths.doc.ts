import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'multiplemonths-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Displaying multiple months is enabled by setting <i>numberOfMonths</i> property to a value greater than 1.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date" [numberOfMonths]="3"></p-calendar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class MultipleMonthDocComponent {
    @Input() id: string;

    @Input() title: string;

    date: Date[];

    code: Code = {
        html: `
<p-calendar [(ngModel)]="dateValue" [numberOfMonths]="3"></p-calendar>`,

        typescript: `
date: Date[];`
    };
}
