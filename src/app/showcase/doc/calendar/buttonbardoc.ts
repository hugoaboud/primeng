import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'buttonbar-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>showButtonBar</i> is present, today and clear buttons are displayed at the footer.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date" [showButtonBar]="true"></p-calendar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class ButtonBarDocComponent {
    @Input() id: string;

    @Input() title: string;

    date: Date[];

    code: Code = {
        html: `
<p-calendar [(ngModel)]="date" [showButtonBar]="true"></p-calendar>`,

        typescript: `
date: Date[];`
    };
}
