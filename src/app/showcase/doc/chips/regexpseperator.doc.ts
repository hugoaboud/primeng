import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'regexpseperator-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"> </app-docsectiontext>
        <div class="card p-fluid">
            <p-chips [(ngModel)]="values" [separator]="separatorExp" placeholder="Hint: a, b c"></p-chips>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class RegexpSeperatorDocComponent {
    @Input() id: string;

    @Input() title: string;

    separatorExp: RegExp = /,| /;

    values: string[];

    code: Code = {
        html: `
<div class="card p-fluid">
    <p-chips [(ngModel)]="values" [separator]="separatorExp" placeholder="Hint: a, b c"></p-chips>
</div>`,
        typescript: `
values: string[];
separatorExp: RegExp = /,| /;`
    };
}
