import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'month-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Month only picker is enabled by specifying view as month in addition to a suitable dateFormat.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true"></p-calendar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class MonthDocComponent {
    @Input() id: string;

    @Input() title: string;

    date: Date[];

    code: Code = {
        html: `
<p-calendar [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true"></p-calendar>`,

        typescript: `
date: Date[];`
    };
}
