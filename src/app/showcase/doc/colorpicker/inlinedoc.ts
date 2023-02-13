import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'inline-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>ColorPicker is displayed as a popup by default, add <i>inline</i> property to customize this behavior.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-colorPicker [(ngModel)]="color" [inline]="true"></p-colorPicker>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class InlineDocComponent {
    @Input() id: string;

    @Input() title: string;

    color: string;

    code: Code = {
        basic: `
<p-colorPicker [(ngModel)]="color1" [inline]="true"></p-colorPicker>`,

        html: `
<div class="card flex justify-content-center">
    <p-colorPicker [(ngModel)]="color" [inline]="true"></p-colorPicker>
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
