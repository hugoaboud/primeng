import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>ProgressBar is used with the <i>value</i> property.</p>
        </app-docsectiontext>
        <div class="card">
            <p-progressBar [value]="50"></p-progressBar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card">
    <p-progressBar [value]="50"></p-progressBar>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './progressbardemo.html'
})

export class ProgressBarDemo {
}`
    };
}
