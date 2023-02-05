import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'invalid-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Invalid state style is added using the <i>p-invalid</i> and <i>p-dirty</i> class to indicate a failed validation.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <input pInputText class="ng-invalid ng-dirty" [(ngModel)]="value1" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class InvalidDocComponent {
    value1: string;

    @Input() id: string

    @Input() title: string
    
    code: Code = {
        html: `
<input pInputText class="ng-invalid ng-dirty" [(ngModel)]="value1" />
`,

        typescript: `
export class InputText {
    value:1 string;
}`
    };
}
