import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'invalid-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Invalid state style is added using the <i>ng-invalid</i> and <i>ng-dirty</i> class to indicate a failed validation.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-radioButton class="ng-invalid ng-dirty" [ngModel]="checked"></p-radioButton>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class InvalidDocComponent {
    @Input() id: string;

    @Input() title: string;

    checked: any;

    code: Code = {
        basic: `
<p-radioButton class="ng-invalid ng-dirty"></p-radioButton>`,

        html: `
<div class="card flex justify-content-center">
    <p-radioButton class="ng-invalid ng-dirty"></p-radioButton>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './passworddemo.html'
})
export class PasswordDemo { }`
    };
}
