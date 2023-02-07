import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>AutoFocus is applied to any focusable input element on initial load. It's disabled by default and needs to be enabled manually.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <input type="text" pInputText pAutoFocus [autofocus]="true" placeholder="Automatically focused" /> 
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card flex justify-content-center">
    <input type="text" pInputText pAutoFocus [autofocus]="true" placeholder="Automatically focused" /> 
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './autofocusdemo.html'
})

export class AutoFocusDemo {
}`
    };
}
