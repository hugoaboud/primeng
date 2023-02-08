import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'filter-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Dropdown provides built-in filtering that is enabled by adding the <i>filter</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country">
                <ng-template pTemplate="selectedItem">
                    <div class="country-item country-item-value" *ngIf="selectedCountry">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" />
                        <div>{{ selectedCountry.name }}</div>
                    </div>
                </ng-template>
                <ng-template let-country pTemplate="item">
                    <div class="country-item">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" />
                        <div>{{ country.name }}</div>
                    </div>
                </ng-template>
            </p-dropdown>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class FilterDocComponent {
    @Input() id: string;

    @Input() title: string;

    countries: any[];

    selectedCountry: string;

    constructor() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }

    code: Code = {
        html: `
<p-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country">
    <ng-template pTemplate="selectedItem">
        <div class="country-item country-item-value" *ngIf="selectedCountry">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" />
            <div>{{ selectedCountry.name }}</div>
        </div>
    </ng-template>
    <ng-template let-country pTemplate="item">
        <div class="country-item">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-dropdown>`,

        typescript: `
export class DropdownDemo {
    countries: any[];

    selectedCountry: string;

    constructor() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }
}`
    };
}
