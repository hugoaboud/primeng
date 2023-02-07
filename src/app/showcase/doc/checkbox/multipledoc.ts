import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'Multiple-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Multiple mode is enabled by default, ngModel property refers to an array to bind the selected values.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-3">
            <div class="field-checkbox">
                <p-checkbox name="group1" value="New York" [(ngModel)]="selectedCities" inputId="ny"></p-checkbox>
                <label for="ny">New York</label>
            </div>
            <div class="field-checkbox">
                <p-checkbox name="group1" value="San Francisco" [(ngModel)]="selectedCities" inputId="sf"></p-checkbox>
                <label for="sf">San Francisco</label>
            </div>
            <div class="field-checkbox">
                <p-checkbox name="group1" value="Los Angeles" [(ngModel)]="selectedCities" inputId="la"></p-checkbox>
                <label for="la">Los Angeles</label>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class MultipleDocComponent {
    @Input() id: string;

    @Input() title: string;

    selectedCities: string[] = [];

    code: Code = {
        html: `
<div class="card flex justify-content-center gap-3">
    <div class="field-checkbox">
        <p-checkbox name="group1" value="New York" [(ngModel)]="selectedCities" inputId="ny"></p-checkbox>
        <label for="ny">New York</label>
    </div>
    <div class="field-checkbox">
        <p-checkbox name="group1" value="San Francisco" [(ngModel)]="selectedCities" inputId="sf"></p-checkbox>
        <label for="sf">San Francisco</label>
    </div>
    <div class="field-checkbox">
        <p-checkbox name="group1" value="Los Angeles" [(ngModel)]="selectedCities" inputId="la"></p-checkbox>
        <label for="la">Los Angeles</label>
    </div>
</div>`,
        typescript: `
selectedCities: string[] = [];`
    };
}
