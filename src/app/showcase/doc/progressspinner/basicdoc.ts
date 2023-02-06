import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>An infinite spin animation is displayed by default.</p>
        </app-docsectiontext>
        <div class="card">
            <p-progressSpinner></p-progressSpinner>
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
    <p-progressSpinner></p-progressSpinner>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './progresspinnerdemo.html'
})

export class ProgressSpinnerDemo {
}`
    };
}
