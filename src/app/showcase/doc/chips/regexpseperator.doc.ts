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
        basic: `
<p-chips [(ngModel)]="values" [separator]="separatorExp" placeholder="Hint: a, b c"></p-chips>`,

        html: `
<div class="card p-fluid">
    <p-chips [(ngModel)]="values" [separator]="separatorExp" placeholder="Hint: a, b c"></p-chips>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './chipsdemo.html'
})

export class ChipsDemo {
    values: string[];

    separatorExp: RegExp = /,| /;
}`
    };
}
