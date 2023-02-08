import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'icon-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>An additional icon is displayed next to the input field when <i>showIcon</i> is present.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date" [showIcon]="true"></p-calendar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class IconDocComponent {
    @Input() id: string;

    @Input() title: string;

    date: Date;

    code: Code = {
        html: `
<p-calendar [(ngModel)]="date" [showIcon]="true"></p-calendar>`,

        typescript: `
date: Date;`
    };
}
