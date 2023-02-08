import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'template-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Calendar UI accepts custom content using header and footer templates.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date">
                <ng-template pTemplate="header">Header</ng-template>
                <ng-template pTemplate="footer">Footer</ng-template>
            </p-calendar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class TemplateDocComponent {
    @Input() id: string;

    @Input() title: string;

    date: Date[];

    code: Code = {
        html: `
<p-calendar [(ngModel)]="date">
    <ng-template pTemplate="header">Header</ng-template>
    <ng-template pTemplate="footer">Footer</ng-template>
</p-calendar>`,

        typescript: `
date: Date[];`
    };
}
