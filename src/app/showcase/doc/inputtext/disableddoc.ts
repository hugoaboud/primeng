import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'disabled-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <input id="disabled-input" type="text" pInputText [disabled]="true" [(ngModel)]="value1" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DisabledDocComponent {
    value1: string;

    value2: string;

    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<input id="disabled-input" type="text" pInputText [disabled]="true" [(ngModel)]="value1" />`,

        typescript: `
export class InputText {
    value:1 string;
}`
    };
}
