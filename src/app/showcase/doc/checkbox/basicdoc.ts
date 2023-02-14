import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Checkbox can either be used in multiple selection with other checkboxes or as a single checkbox to provide a boolean value.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-checkbox [(ngModel)]="checked" [binary]="true" inputId="binary"></p-checkbox>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    checked: boolean;

    code: Code = {
        basic: `
<p-checkbox [(ngModel)]="checked" [binary]="true" inputId="binary"></p-checkbox>`,

        html: `
<div class="card flex justify-content-center">
    <p-checkbox [(ngModel)]="checked" [binary]="true" inputId="binary"></p-checkbox>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './checkboxdemo.html'
})

export class CheckboxDemo {
    checked: boolean;
}`
    };
}
