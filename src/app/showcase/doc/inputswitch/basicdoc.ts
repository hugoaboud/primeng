import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Two-way binding to a boolean property is defined using the standard ngModel directive.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-inputSwitch [(ngModel)]="checked"></p-inputSwitch>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    checked: boolean;

    code: Code = {
        html: `
<p-inputSwitch [(ngModel)]="checked"></p-inputSwitch>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './inputswitchdemo.html'
})

export class InputSwitchDemo {
    checked: boolean;
}`
    };
}
