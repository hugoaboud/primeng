import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'icons-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Icons can be placed inside an input element by wrapping both the input and the icon with an element that has either <i>.p-input-icon-left</i> or <i>p-input-icon-right</i> class..</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap justify-content-center gap-3">
            <span class="p-input-icon-left">
                <i class="pi pi-search"></i>
                <input type="text" pInputText [(ngModel)]="value1" />
            </span>

            <span class="p-input-icon-right">
                <i class="pi pi-spin pi-spinner"></i>
                <input type="text" pInputText [(ngModel)]="value2" />
            </span>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class IconsDocComponent {
    value1: string;
    
    value2: string;

    @Input() id: string

    @Input() title: string
    
    code: Code = {
        html: `
<div class="card flex flex-wrap justify-content-center gap-3">
    <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <input type="text" pInputText [(ngModel)]="value1">
    </span>

    <span class="p-input-icon-right">
        <i class="pi pi-spin pi-spinner" />
        <input type="text" pInputText [(ngModel)]="value2">
    </span>
</div>`,

        typescript: `
export class InputText {
    value:1 string;
    value:2 string
}`
    };
}
