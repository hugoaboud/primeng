import { Component } from '@angular/core';

interface CodeLang {
    html?: string;
    typescript?: string;
    scss?: string;
    data?: string;
}

@Component({
    selector: 'invalid-doc',
    template: ` <div>
        <app-docsectiontext title="Invalid">
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

    code: CodeLang = {
        html: `
<input pInputText class="ng-invalid ng-dirty" [(ngModel)]="value1" />
`,

        typescript: `
export class InputText {
    value:1 string;
}`
    };
}
