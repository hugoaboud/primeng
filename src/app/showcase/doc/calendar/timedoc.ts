import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'time-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>TimePicker is enabled with <i>showTime</i> property and 24 (default) or 12 hour mode is configured using <i>hourFormat</i> option.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date" [showTime]="true" [showSeconds]="true"></p-calendar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class TimeDocComponent {
    @Input() id: string;

    @Input() title: string;

    date: Date[];

    code: Code = {
        html: `
<p-calendar [(ngModel)]="date" [showTime]="true" [showSeconds]="true"></p-calendar>`,

        typescript: `
date: Date[];`
    };
}
