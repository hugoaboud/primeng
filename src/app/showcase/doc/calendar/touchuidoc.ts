import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'touchui-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>touchUI</i> is enabled, overlay is displayed as optimized for touch devices.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date" [touchUI]="true" [readonlyInput]="true"></p-calendar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class TouchUIDocComponent {
    @Input() id: string;

    @Input() title: string;

    date: Date[];

    code: Code = {
        basic: `
<p-calendar [(ngModel)]="date" [touchUI]="true" [readonlyInput]="true"></p-calendar>`,

        html: `
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" [touchUI]="true" [readonlyInput]="true"></p-calendar>
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
