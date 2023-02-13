import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'year-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Similar to the month picker, year picker can be used to select years only. Set <i>view</i> to "year" to display the year picker.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date" view="year" dateFormat="yy" inputId="yearpicker"></p-calendar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class YearDocComponent {
    @Input() id: string;

    @Input() title: string;

    date: Date[];

    code: Code = {
        basic: `
<p-calendar [(ngModel)]="date" view="year" dateFormat="yy" inputId="yearpicker"></p-calendar>`,

        html: `
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" view="year" dateFormat="yy" inputId="yearpicker"></p-calendar>
</div>`,

        typescript: `
import { Component } from '@angular/core'

@Component({
    templateUrl: './calendardemo.html'
})

export class CalendarDemo {
    date: Date[];
}`
    };
}
