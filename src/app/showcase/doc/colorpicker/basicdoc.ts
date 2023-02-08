import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>ColorPicker uses ngModel directive to bind a value.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-colorPicker [(ngModel)]="color"></p-colorPicker>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    color: string;

    code: Code = {
        html: `
<p-colorPicker [(ngModel)]="color"></p-colorPicker>`,
        typescript: `
color: string;`
    };
}
