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
        html: `
<p-autoComplete [(ngModel)]="selectedCountryAdvanced" [suggestions]="filteredCountries" 
    (completeMethod)="filterCountry($event)" field="name" [dropdown]="true">
        <ng-template let-country pTemplate="item">
            <div class="country-item">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" 
                    [class]="'flag flag-' + country.code.toLowerCase()" />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
</p-autoComplete>`,

        typescript: `
export class TemplateDocComponent {
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
