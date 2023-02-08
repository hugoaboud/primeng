import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'editable-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>editable</i> is present, the input can also be entered with typing.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" [editable]="true" optionLabel="name"></p-dropdown>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class EditableDocComponent {
    @Input() id: string;

    @Input() title: string;

    cities: City[];

    selectedCity: City;

    constructor() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

    code: Code = {
        html: `
<p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" [editable]="true" optionLabel="name"></p-dropdown>`,

        typescript: `
interface City {
    name: string;
    code: string;
}

export class DropdownDemo {
    cities: City[];

    selectedCity: City;

    constructor() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`
    };
}
