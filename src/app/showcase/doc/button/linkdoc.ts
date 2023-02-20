import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'link-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A button can be rendered as a link as well.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-button label="Submit" styleClass="p-button-link"></p-button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class LinkDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-button label="Submit" styleClass="p-button-link"></p-button>`,

        html: `
<div class="card flex justify-content-center">
    <p-button label="Submit" styleClass="p-button-link"></p-button>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './linkdemo.html'
})
export class LinkDemo { }`
    };
}
