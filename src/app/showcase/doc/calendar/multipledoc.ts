import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'multiple-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>In order to choose multiple dates, set <i>selectionMode</i> as <i>multiple</i>. In this mode, the value binding should be an array.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="dates" selectionMode="multiple" [readonlyInput]="true"></p-calendar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class MultipleDocComponent {
    @Input() id: string;

    @Input() title: string;

    dates: Date[];

    code: Code = {
        html: `
<p-calendar [(ngModel)]="dates" selectionMode="multiple" [readonlyInput]="true"></p-calendar>`,

        typescript: `
dates: Date[];`
    };
}
