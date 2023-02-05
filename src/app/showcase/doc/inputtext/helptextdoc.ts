import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'helptext-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"> An advisory text can be defined with the semantic <i>small</i> tag. </app-docsectiontext>
        <div class="card flex justify-content-center">
            <div class="flex flex-column gap-2">
                <label htmlFor="username">Username</label>
                <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value1" />
                <small id="username-help">Enter your username to reset your password.</small>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class HelpTextDocComponent {
    value1: string;

    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="flex flex-column gap-2">
    <label htmlFor="username">Username</label>
    <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value1" />
    <small id="username-help">Enter your username to reset your password.</small>
</div>`,

        typescript: `
export class InputText {
    value:1 string;
}`
    };
}
