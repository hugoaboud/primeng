import { Component } from '@angular/core';

interface CodeLang {
    html?: string;
    typescript?: string;
    scss?: string;
    data?: string;
}

@Component({
    selector: 'keyfilter-doc',
    template: ` <div>
        <app-docsectiontext title="Key Filter">
            <p>InputText has built-in key filtering support to block certain keys, refer to <a href="/keyfilter">keyfilter</a> page for more information.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <input pInputText pKeyFilter="int" placeholder="Integers" [(ngModel)]="value1" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class KeyFilterDocComponent {
    value1: string;

    code: CodeLang = {
        html: `
<input pInputText pKeyFilter="int" placeholder="Integers" [(ngModel)]="value1" />`,

        typescript: `
export class InputText {
    value:1 string;
}`
    };
}
