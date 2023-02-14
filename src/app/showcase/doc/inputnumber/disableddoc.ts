import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'disabled-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-inputNumber inputId="integeronly" [disabled]="true" prefix="%" [(ngModel)]="value1"> </p-inputNumber>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DisabledDocComponent {
    @Input() id: string;

    @Input() title: string;

    value1: number = 50;

    code: Code = {
        basic: `
<p-inputNumber inputId="integeronly" [disabled]="true" prefix="%" [(ngModel)]="value1"> </p-inputNumber>`,

        html: `
<div class="card flex justify-content-center">
    <p-inputNumber inputId="integeronly" [disabled]="true" prefix="%" [(ngModel)]="value1"> </p-inputNumber>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './inputnumberdemo.html'
})

export class InputNumberDemo {
    value1: number = 50;
}`
    };
}
