import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'meter-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Strength meter is displayed as a popup while a value is being entered.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-password [(ngModel)]="value"></p-password>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class MeterDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: string;

    code: Code = {
        basic: `
<p-password [(ngModel)]="value"></p-password>`,

        html: `
<div class="card flex justify-content-center">
    <p-password [(ngModel)]="value"></p-password>
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
