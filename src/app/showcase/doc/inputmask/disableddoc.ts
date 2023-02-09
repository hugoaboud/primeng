import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'disabled-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When disabled is present, the element cannot be edited and focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-inputMask mask="999-99-9999" [(ngModel)]="value" [disabled]="true"></p-inputMask>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DisabledDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: string;

    code: Code = {
        html: `
<p-inputMask mask="999-99-9999" [(ngModel)]="value" [disabled]="true"></p-inputMask>`,

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
