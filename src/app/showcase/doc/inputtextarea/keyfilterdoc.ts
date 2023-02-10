import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'keyfilter-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>InputText has built-in key filtering support to block certain keys, refer to <a href="/keyfilter">keyfilter</a> page for more information.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <textarea pKeyFilter="int" rows="5" cols="30" pInputTextarea></textarea>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class KeyfilterDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<textarea pKeyFilter="int" rows="5" cols="30" pInputTextarea></textarea>`,

        html: `
<div class="card flex justify-content-center">
    <textarea pKeyFilter="int" rows="5" cols="30" pInputTextarea></textarea>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './textareademo.html'
})

export class TextareaDemo {
}`
    };
}
