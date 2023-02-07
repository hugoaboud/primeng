import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'dynamic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Checkboxes can be generated using a list of values.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <div class="flex flex-column gap-2">
                <div *ngFor="let category of categories" class="field-checkbox">
                    <p-checkbox name="group" [value]="category" [(ngModel)]="selectedCategories" [inputId]="category.key"></p-checkbox>
                    <label [for]="category.key">{{ category.name }}</label>
                </div>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DynamicDocComponent {
    @Input() id: string;

    @Input() title: string;

    selectedCategories: any[] = [];

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    code: Code = {
        html: `
<div class="flex flex-column gap-3">
    <div *ngFor="let category of categories" class="field-checkbox">
        <p-checkbox name="group" [value]="category" [(ngModel)]="selectedCategories" [inputId]="category.key"></p-checkbox>
        <label [for]="category.key">{{ category.name }}</label>
    </div>
</div>`,
        typescript: `
categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
selectedCategories: any[];`
    };
}
