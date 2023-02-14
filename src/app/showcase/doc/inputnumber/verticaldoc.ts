import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'vertical-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Buttons can also placed vertically by setting <i>buttonLayout</i> as <i>vertical</i>.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-inputNumber
                [(ngModel)]="value1"
                [showButtons]="true"
                buttonLayout="vertical"
                spinnerMode="vertical"
                inputId="vertical"
                decrementButtonClass="p-button-secondary"
                incrementButtonClass="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
            ></p-inputNumber>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class VerticalDocComponent {
    @Input() id: string;

    @Input() title: string;

    value1: number = 50;

    code: Code = {
        basic: `
<p-inputNumber [(ngModel)]="value1" [showButtons]="true" buttonLayout="vertical" spinnerMode="vertical" inputId="vertical" decrementButtonClass="p-button-secondary"
    incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" ></p-inputNumber>`,

        html: `
<div class="card flex justify-content-center">
    <p-inputNumber [(ngModel)]="value1" [showButtons]="true" buttonLayout="vertical" spinnerMode="vertical" inputId="vertical" decrementButtonClass="p-button-secondary"
        incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
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
