import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'commaseperator-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A new chip is added when enter key is pressed, separator property allows definining an additional key. Currently only valid value is , to create a new item when comma key is pressed.</p>
        </app-docsectiontext>
        <div class="card p-fluid">
            <p-chips [(ngModel)]="values" separator="," placeholder="Hint: a, b, c"></p-chips>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class CommaSeperatorDocComponent {
    @Input() id: string;

    @Input() title: string;

    values: string[];

    code: Code = {
        html: `
<div class="card p-fluid">
    <p-chips [(ngModel)]="values" separator="," placeholder="Hint: a, b, c"></p-chips>
</div>`,
        typescript: `
values: string[];`
    };
}
