import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Text to display on a button is defined with the <i>label</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-button label="Submit"></p-button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-button label="Submit"></p-button>`,

        html: `
<div class="card flex justify-content-center">
    <p-button label="Submit"></p-button>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './basicdemo.html'
})
export class BasicDemo { }`
    };
}
