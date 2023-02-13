import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'floatlabel-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A floating label appears on top of the input field when focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <span class="p-float-label">
                <input pInputText id="username" [(ngModel)]="value" />
                <label htmlFor="username">Username</label>
            </span>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class FloatLabelDocComponent {
    value: string;

    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<span class="p-float-label">
    <input pInputText id="username" [(ngModel)]="value" />
    <label htmlFor="username">Username</label>
</span>`,

        html: `
<div class="card flex justify-content-center">
    <span class="p-float-label">
        <input pInputText id="username" [(ngModel)]="value" />
        <label htmlFor="username">Username</label>
    </span>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './inputtextdemo.html'
})

export class InputTextDemo {
    value: string;
}`
    };
}
