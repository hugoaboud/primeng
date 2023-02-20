import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'filter-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>MultiSelect provides built-in filtering that is enabled by adding the <i>filter</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-multiSelect [options]="cities" [(ngModel)]="selectedCities" [filter]="true" optionLabel="name"></p-multiSelect>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class FilterDocComponent {
    @Input() id: string;

    @Input() title: string;

    cities: City[];

    selectedCities: City[];

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
        basic: `
<p-multiSelect [options]="cities" [(ngModel)]="selectedCities" [filter]="true" optionLabel="name"></p-multiSelect>`,

        html: `
<div class="card flex justify-content-center">
    <p-multiSelect [options]="cities" [(ngModel)]="selectedCities" [filter]="true" optionLabel="name"></p-multiSelect>
</div>`,

        typescript: `
import { Component } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    templateUrl: './multiselectdemo.html'
})

export class MultiSelectDemo {

    cities: City[];

    selectedCities: City[];

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
