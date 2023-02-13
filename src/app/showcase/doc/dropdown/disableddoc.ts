import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'disabled-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-dropdown placeholder="Select a City" [disabled]="true"></p-dropdown>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DisabledDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-dropdown placeholder="Select a City" [disabled]="true"></p-dropdown>`,

        html: `
<div class="card flex justify-content-center">
    <p-dropdown placeholder="Select a City" [disabled]="true"></p-dropdown>
</div>`
    };
}
