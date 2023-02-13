import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'virtualscroll-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"></app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-autoComplete [(ngModel)]="selectedItem" [virtualScroll]="true" [suggestions]="filteredItems" [virtualScrollItemSize]="34" (completeMethod)="filterItems($event)" field="label" [dropdown]="true"> </p-autoComplete>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class VirtualScrollDocComponent {
    @Input() id: string;

    @Input() title: string;

    selectedItem: any;

    filteredItems: any[];

    items: any[];

    filterItems(event) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(item);
            }
        }

        this.filteredItems = filtered;
    }

    ngOnInit() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }

    code: Code = {
        basic: `
<p-autoComplete [(ngModel)]="selectedItem" [virtualScroll]="true" [suggestions]="filteredItems" [virtualScrollItemSize]="34" (completeMethod)="filterItems($event)" field="label" [dropdown]="true"> </p-autoComplete>`,

        html: `
<div class="card flex justify-content-center">
    <p-autoComplete [(ngModel)]="selectedItem" [virtualScroll]="true" [suggestions]="filteredItems" [virtualScrollItemSize]="34" (completeMethod)="filterItems($event)" field="label" [dropdown]="true"> </p-autoComplete>
</div>`,

        typescript: `
import { SelectItemGroup } from 'primeng/api';
import { Component } from '@angular/core';

@Component({
    templateUrl: './autocompletedemo.html'
})
export class AutoCompleteDemo {
    countries: any[];

    items: any[];

    groupedCities: SelectItemGroup[];

    selectedCountryAdvanced: any[];

    filteredCountries: any[];

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }

    filterCountry(event) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < this.countries.length; i++) {
            let country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`
    };
}
