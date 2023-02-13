import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'keyfilter-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>InputText has built-in key filtering support to block certain keys, refer to <a href="/keyfilter">keyfilter</a> page for more information.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <input pInputText pKeyFilter="int" placeholder="Integers" [(ngModel)]="value" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class KeyFilterDocComponent {
    value: number;

    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<input pInputText pKeyFilter="int" placeholder="Integers" [(ngModel)]="value" />`,

        html: `
<div class="card flex justify-content-center">
    <input pInputText pKeyFilter="int" placeholder="Integers" [(ngModel)]="value" />
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './inputtextdemo.html'
})

export class InputTextDemo {
    value: number;
}`
    };
}
