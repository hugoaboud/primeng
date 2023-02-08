import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'datetemplate-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"></app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date">
                <ng-template pTemplate="date" let-date>
                    <span [ngStyle]="{ textDecoration: date.day < 21 && date.day > 10 ? 'line-through' : 'inherit' }">{{ date.day }}</span>
                </ng-template>
            </p-calendar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DateTemplateDocComponent {
    @Input() id: string;

    @Input() title: string;

    date: Date[];

    code: Code = {
        html: `
<p-calendar [(ngModel)]="date">
    <ng-template pTemplate="date" let-date>
        <span [ngStyle]="{textDecoration: (date.day < 21 && date.day > 10) ? 'line-through' : 'inherit'}">{{date.day}}</span>
    </ng-template>
</p-calendar>`,

        typescript: `
date: Date[];`
    };
}
