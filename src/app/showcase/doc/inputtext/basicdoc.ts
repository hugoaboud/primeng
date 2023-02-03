import { Component } from '@angular/core';

interface CodeLang {
    html?: string;
    typescript?: string;
    scss?: string;
    data?: string;
}

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext title="Basic">
            <p>InputText is used as a controlled input with <i>value</i> and <i>onChange</i> properties.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <input type="text" pInputText [(ngModel)]="value1" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    value1: string;

    code: CodeLang = {
        html: `
<input type="text" pInputText [(ngModel)]="value1">`,
        typescript: `
export class InputText {
    value:1 string;
}`
    };
}
