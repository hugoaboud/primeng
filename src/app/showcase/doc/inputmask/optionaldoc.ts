import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'optional-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When the input does not complete the mask definition, it is cleared by default. Use <i>autoClear</i> property to control this behavior. In addition, <i>?</i> is used to mark anything after the question mark optional.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-inputMask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999"></p-inputMask>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class OptionalDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: string;

    code: Code = {
        basic: `
<p-inputMask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999"></p-inputMask>`,

        html: `
<div class="card flex justify-content-center">
    <p-inputMask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999"></p-inputMask>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './inputmaskdemo.html'
})

export class InputMaskDemo {
    value: string;
}`
    };
}
