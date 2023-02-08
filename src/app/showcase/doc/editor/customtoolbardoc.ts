import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'customtoolbar-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Editor provides a default toolbar with common options, to customize it define your elements inside the header element. Refer to <a href="http://quilljs.com/docs/modules/toolbar/">Quill documentation</a> for available controls.</p>
        </app-docsectiontext>
        <div class="card">
            <p-editor [(ngModel)]="text" [style]="{ height: '320px' }">
                <ng-template pTemplate="header">
                    <span class="ql-formats">
                        <button type="button" class="ql-bold" aria-label="Bold"></button>
                        <button type="button" class="ql-italic" aria-label="Italic"></button>
                        <button type="button" class="ql-underline" aria-label="Underline"></button>
                    </span>
                </ng-template>
            </p-editor>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class CustomToolbarDocComponent {
    @Input() id: string;

    @Input() title: string;

    text: string = 'Hello World!';

    code: Code = {
        html: `
<p-editor [(ngModel)]="text" [style]="{ height: '320px' }">
    <ng-template pTemplate="header">
        <span class="ql-formats">
            <button type="button" class="ql-bold" aria-label="Bold"></button>
            <button type="button" class="ql-italic" aria-label="Italic"></button>
            <button type="button" class="ql-underline" aria-label="Underline"></button>
        </span>
    </ng-template>
</p-editor>`,

        typescript: `
export class EditorDemo {
    text: string = 'Hello World!';      
}`
    };
}
