import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'readonly-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>readonly</i> is present, the value cannot be edited.</p>
        </app-docsectiontext>
        <div class="card">
            <p-editor [(ngModel)]="text" [readonly]="true" [style]="{ height: '320px' }"></p-editor>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class ReadOnlyDocComponent {
    @Input() id: string;

    @Input() title: string;

    text: string = 'Always bet on Prime!';

    code: Code = {
        html: `
<p-editor [(ngModel)]="text" [readonly]="true" [style]="{ height: '320px' }"></p-editor>`,

        typescript: `
export class EditorDemo {
    text: string = 'Always bet on Prime!';      
}`
    };
}
