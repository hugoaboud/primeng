import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Component is defined using p-password element with a mask and two-way value binding is enabled with standard ngModel directive.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-password [(ngModel)]="value" [feedback]="false"></p-password>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: string;

    code: Code = {
        basic: `
<p-password [(ngModel)]="value" [feedback]="false"></p-password>`,

        html: `
<div class="card flex justify-content-center">
    <p-password [(ngModel)]="value" [feedback]="false"></p-password>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './passworddemo.html'
})

export class PasswordDemo {
    value: string;
}`
    };
}
