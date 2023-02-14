import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'disabled-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-colorPicker [(ngModel)]="color" [disabled]="true"></p-colorPicker>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DisabledDocComponent {
    @Input() id: string;

    @Input() title: string;

    color: string;

    code: Code = {
        basic: `
<p-colorPicker [(ngModel)]="color" [disabled]="true"></p-colorPicker>`,

        html: `
<div class="card flex justify-content-center">
    <p-colorPicker [(ngModel)]="color" [disabled]="true"></p-colorPicker>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './colorpickerdemo.html'
})

export class ColorPickerDemo {
    color: string;
}`
    };
}
