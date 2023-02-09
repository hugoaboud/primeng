import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'invalid-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Invalid state style is added using the <i>ng-invalid</i> and <i>ng-dirty</i> class to indicate a failed validation.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-inputMask mask="999-99-9999" [(ngModel)]="value" class="ng-invalid ng-dirty"></p-inputMask>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class InvalidDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: string;

    code: Code = {
        html: `
<p-inputMask mask="999-99-9999" [(ngModel)]="value" class="ng-invalid ng-dirty"></p-inputMask>`,

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
