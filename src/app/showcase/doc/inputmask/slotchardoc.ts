import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'slotchar-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Default placeholder for a mask is underscore that can be customized using <i>slotChar</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-inputMask [(ngModel)]="value" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy"></p-inputMask>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class SlotCharDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: string;

    code: Code = {
        html: `
<p-inputMask [(ngModel)]="value" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy"></p-inputMask>`,

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
