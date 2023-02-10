import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'autoresize-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When autoResize is enabled, textarea grows instead of displaying a scrollbar.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <textarea rows="5" cols="30" pInputTextarea [autoResize]="true"></textarea>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class AutoResizeDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: string;

    code: Code = {
        html: `
<textarea rows="5" cols="30" pInputTextarea [autoResize]="true"></textarea>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './textareademo.html'
})

export class TextareaDemo {
}`
    };
}
