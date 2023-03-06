import { Component, Input } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';
import { Code } from '../../domain/code';

@Component({
    selector: 'table-paginator-basic-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id" [level]="3">
            <p>
                Pagination is enabled by setting <i>paginator</i> property to <i>true</i> and defining a rows property to specify the number of rows per page. For server side pagination, see the
                <a [routerLink]="['/table#lazy']">lazy loading</a> example.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-table
                [value]="customers"
                [paginator]="true"
                [rows]="5"
                [showCurrentPageReport]="true"
                [tableStyle]="{ 'min-width': '50rem' }"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                [rowsPerPageOptions]="[10, 25, 50]"
            >
                <ng-template pTemplate="header">
                    <tr>
                        <th style="width:25%">Name</th>
                        <th style="width:25%">Country</th>
                        <th style="width:25%">Company</th>
                        <th style="width:25%">Representative</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-customer>
                    <tr>
                        <td>{{ customer.name }}</td>
                        <td>{{ customer.country.name }}</td>
                        <td>{{ customer.company }}</td>
                        <td>{{ customer.representative.name }}</td>
                    </tr>
                </ng-template>
                <ng-template pTemplate="paginatorleft">
                    <p-button type="button" icon="pi pi-plus" styleClass="p-button-text"></p-button>
                </ng-template>
                <ng-template pTemplate="paginatorright">
                    <p-button type="button" icon="pi pi-cloud" styleClass="p-button-text"></p-button>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code" selector="table-paginator-basic-demo" [extFiles]="extFiles"></app-code>
    </div>`
})
export class TablePaginatorBasicDemo {
    @Input() id: string;

    @Input() title: string;

    customers: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
    }

    code: Code = {
        basic: `
<p-table
    [value]="customers"
    [paginator]="true"
    [rows]="5"
    [showCurrentPageReport]="true"
    [tableStyle]="{ 'min-width': '50rem' }"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    [rowsPerPageOptions]="[10, 25, 50]"
>
    <ng-template pTemplate="header">
        <tr>
            <th style="width:25%">Name</th>
            <th style="width:25%">Country</th>
            <th style="width:25%">Company</th>
            <th style="width:25%">Representative</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
        </tr>
    </ng-template>
    <ng-template pTemplate="paginatorleft">
        <p-button type="button" icon="pi pi-plus" styleClass="p-button-text"></p-button>
    </ng-template>
    <ng-template pTemplate="paginatorright">
        <p-button type="button" icon="pi pi-cloud" styleClass="p-button-text"></p-button>
    </ng-template>
</p-table>`,
        html: `
<div class="card">
    <p-table
        [value]="customers"
        [paginator]="true"
        [rows]="5"
        [showCurrentPageReport]="true"
        [tableStyle]="{ 'min-width': '50rem' }"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        [rowsPerPageOptions]="[10, 25, 50]"
    >
        <ng-template pTemplate="header">
            <tr>
                <th style="width:25%">Name</th>
                <th style="width:25%">Country</th>
                <th style="width:25%">Company</th>
                <th style="width:25%">Representative</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr>
                <td>{{ customer.name }}</td>
                <td>{{ customer.country.name }}</td>
                <td>{{ customer.company }}</td>
                <td>{{ customer.representative.name }}</td>
            </tr>
        </ng-template>
        <ng-template pTemplate="paginatorleft">
            <p-button type="button" icon="pi pi-plus" styleClass="p-button-text"></p-button>
        </ng-template>
        <ng-template pTemplate="paginatorright">
            <p-button type="button" icon="pi pi-cloud" styleClass="p-button-text"></p-button>
        </ng-template>
    </p-table>
</div>`,
        typescript: `
import { Component } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-paginator-basic-demo',
    templateUrl: 'table-paginator-basic-demo'
})
export class TablePaginatorBasicDemo {
    customers: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
    }
}`,
        service: ['CustomerService']
    };

    extFiles = [
        {
            path: 'src/domain/product.ts',
            content: `
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`
        }
    ];
}
