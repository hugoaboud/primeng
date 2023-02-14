import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'label-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>The label attribute provides a label text for the checkbox. This label is also clickable and toggles the checked state.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-3">
            <p-checkbox name="groupname" value="val1" label="Value 1" [(ngModel)]="selectedValues"></p-checkbox>
            <p-checkbox name="groupname" value="val2" label="Value 2" [(ngModel)]="selectedValues"></p-checkbox>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class LabelDocComponent {
    @Input() id: string;

    @Input() title: string;

    selectedValues: string[] = [];

    code: Code = {
        basic: `
<p-checkbox name="groupname" value="val1" label="Value 1" [(ngModel)]="selectedValues"></p-checkbox>
<p-checkbox name="groupname" value="val2" label="Value 2" [(ngModel)]="selectedValues"></p-checkbox>`,

        html: `
<div class="card flex justify-content-center gap-3">
    <p-checkbox name="groupname" value="val1" label="Value 1" [(ngModel)]="selectedValues"></p-checkbox>
    <p-checkbox name="groupname" value="val2" label="Value 2" [(ngModel)]="selectedValues"></p-checkbox>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './checkboxdemo.html'
})

export class CheckboxDemo {
    selectedValues: string[] = [];
}`
    };
}
