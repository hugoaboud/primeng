import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-subheader-grouping-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id" [level]="3">
            <p>
                Rows are grouped with the <i>groupRowsBy</i> property. When <i>rowGroupMode</i> is set as <i>subheader</i>, a header and footer can be displayed for each group. The content of a group header is provided with <i>groupheader</i> and
                footer with <i>groupfooter</i> templates.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-table [value]="customers" sortField="representative.name" sortMode="single" [scrollable]="true" scrollHeight="400px" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{ 'min-width': '60rem' }">
                <ng-template pTemplate="header">
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Company</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="groupheader" let-customer>
                    <tr pRowGroupHeader>
                        <td colspan="5">
                            <img [alt]="customer.representative.name" src="assets/showcase/images/demo/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                            <span class="font-bold ml-2">{{ customer.representative.name }}</span>
                        </td>
                    </tr>
                </ng-template>
                <ng-template pTemplate="groupfooter" let-customer>
                    <tr>
                        <td colspan="5" class="text-right font-bold pr-6">Total Customers: {{ calculateCustomerTotal(customer.representative.name) }}</td>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-customer let-rowIndex="rowIndex">
                    <tr>
                        <td>
                            {{ customer.name }}
                        </td>
                        <td>
                            <img src="assets/showcase/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" width="30" />
                            <span class="image-text">{{ customer.country.name }}</span>
                        </td>
                        <td>
                            {{ customer.company }}
                        </td>
                        <td>
                            <span [class]="'customer-badge status-' + customer.status">{{ customer.status }}</span>
                        </td>
                        <td>
                            {{ customer.date }}
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code" selector="table-subheader-grouping-demo" [extFiles]="extFiles"></app-code>
    </div>`
})
export class TableSubheaderGroupingDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    customers: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }

    calculateCustomerTotal(name) {
        let total = 0;

        if (this.customers) {
            for (let customer of this.customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    code: Code = {
        basic: `
<p-table [value]="customers" sortField="representative.name" sortMode="single" [scrollable]="true" scrollHeight="400px" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{'min-width': '60rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Company</th>
            <th>Status</th>
            <th>Date</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="groupheader" let-customer>
        <tr pRowGroupHeader>
            <td colspan="5">
                <img [alt]="customer.representative.name" src="assets/showcase/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                <span class="font-bold ml-2">{{customer.representative.name}}</span>
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="groupfooter" let-customer>
        <tr>
            <td colspan="5" class="text-right font-bold pr-6">Total Customers: {{calculateCustomerTotal(customer.representative.name)}}</td>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer let-rowIndex="rowIndex">
        <tr>
            <td>
                {{customer.name}}
            </td>
            <td>
                <img src="assets/showcase/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" width="30">
                <span class="image-text">{{customer.country.name}}</span>
            </td>
            <td>
                {{customer.company}}
            </td>
            <td>
                <span [class]="'customer-badge status-' + customer.status">{{customer.status}}</span>
            </td>
            <td>
                {{customer.date}}
            </td>
        </tr>
    </ng-template>
</p-table>`,
        html: `
<div class="card">
    <p-table [value]="customers" sortField="representative.name" sortMode="single" [scrollable]="true" scrollHeight="400px" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{'min-width': '60rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Company</th>
                <th>Status</th>
                <th>Date</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="groupheader" let-customer>
            <tr pRowGroupHeader>
                <td colspan="5">
                    <img [alt]="customer.representative.name" src="assets/showcase/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                    <span class="font-bold ml-2">{{customer.representative.name}}</span>
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="groupfooter" let-customer>
            <tr>
                <td colspan="5" class="text-right font-bold pr-6">Total Customers: {{calculateCustomerTotal(customer.representative.name)}}</td>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer let-rowIndex="rowIndex">
            <tr>
                <td>
                    {{customer.name}}
                </td>
                <td>
                    <img src="assets/showcase/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" width="30">
                    <span class="image-text">{{customer.country.name}}</span>
                </td>
                <td>
                    {{customer.company}}
                </td>
                <td>
                    <span [class]="'customer-badge status-' + customer.status">{{customer.status}}</span>
                </td>
                <td>
                    {{customer.date}}
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-subheader-grouping-demo',
    templateUrl: 'table-subheader-grouping-demo'
})
export class TableSubheaderGroupingDemo implements OnInit{
    customers: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }

    calculateCustomerTotal(name) {
        let total = 0;

        if (this.customers) {
            for (let customer of this.customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
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
