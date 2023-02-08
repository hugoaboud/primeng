import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'locale-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Locale based settings such as labels, dateFormat and firstDayOfWeek are derived from the global Locale configuration. In case, a certain calendar needs to be customized, locale property can be used to override the global setting.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date" dateFormat="dd.mm.yy" locale="es"></p-calendar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class LocaleDocComponent {
    @Input() id: string;

    @Input() title: string;

    date: Date;

    code: Code = {
        html: `
<p-calendar [(ngModel)]="date" dateFormat="dd.mm.yy"></p-calendar>`,

        typescript: `
date: Date;`
    };
}
