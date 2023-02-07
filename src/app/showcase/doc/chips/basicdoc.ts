import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Chips requires an array as its model.</p>
        </app-docsectiontext>
        <div class="card p-fluid">
            <p-chips [(ngModel)]="values"></p-chips>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    values: string[];

    code: Code = {
        html: `
<div class="card p-fluid">
    <p-chips [(ngModel)]="values" ></p-chips>
</div>`,
        typescript: `
values: string[];`
    };
}
