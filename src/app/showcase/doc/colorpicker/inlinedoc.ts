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
        html: `
<p-colorPicker [(ngModel)]="color1" [inline]="true"></p-colorPicker>`,
        typescript: `
color: string;`
    };
}
