import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'input-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Inplace can be used within a form to display a value as read only before making it editable. The <i>closable</i> property adds a close button next to the content to switch back to read only mode.</p>
        </app-docsectiontext>
        <div class="card">
            <p-inplace closable="closable" [style]="{ 'min-height': '33px' }">
                <ng-template pTemplate="display"> Click to Edit </ng-template>
                <ng-template pTemplate="content">
                    <input type="text" value="PrimeNG" pInputText />
                </ng-template>
            </p-inplace>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class InputDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-inplace closable="closable" [style]="{ 'min-height': '33px' }">
    <ng-template pTemplate="display"> Click to Edit </ng-template>
    <ng-template pTemplate="content">
        <input type="text" value="PrimeNG" pInputText />
    </ng-template>
</p-inplace>`,
        html: `
<div class="card">
    <p-inplace closable="closable" [style]="{'min-height':'33px'}">
        <ng-template pTemplate="display">
            Click to Edit
        </ng-template>
        <ng-template pTemplate="content">
            <input type="text" value="PrimeNG" pInputText>
        </ng-template>
    </p-inplace>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './inplacedemo.html'
})

export class InplaceDemo {
}`
    };
}
