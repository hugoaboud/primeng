import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-expandable-row-group-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id" [level]="3">
            <p>When <i>expandableRowGroups</i> is present in subheader based row grouping, groups can be expanded and collapsed. State of the expansions are controlled using the <i>expandedRows</i> and <i>onRowToggle</i> properties.</p>
        </app-docsectiontext>
        <div class="card">
            <p-table [value]="customers" sortField="representative.name" sortMode="single" dataKey="representative.name" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{'min-width': '70rem'}">
                <ng-template pTemplate="header">
                    <tr>
                        <th style="width:20%">Name</th>
                        <th style="width:20%">Country</th>
                        <th style="width:20%">Company</th>
                        <th style="width:20%">Status</th>
                        <th style="width:20%">Date</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="groupheader" let-customer let-rowIndex="rowIndex" let-expanded="expanded">
                    <tr>
                        <td colspan="5">
                            <button type="button" pButton pRipple [pRowToggler]="customer" class="p-button-text p-button-rounded p-button-plain mr-2" [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"></button>
                            <img [alt]="customer.representative.name" src="assets/showcase/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                            <span class="font-bold ml-2">{{customer.representative.name}}</span>
                        </td>
                    </tr>
                </ng-template>
                <ng-template pTemplate="groupfooter" let-customer>
                    <tr class="p-rowgroup-footer">
                        <td colspan="4" style="text-align: right">Total Customers</td>
                        <td>{{calculateCustomerTotal(customer.representative.name)}}</td>
                    </tr>
                </ng-template>
                <ng-template pTemplate="rowexpansion" let-customer>
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
        </div>
        <app-code [code]="code" selector="table-expandable-row-group-demo" [extFiles]="extFiles"></app-code>
    </div>`
})
export class TableExpandableRowGroupDemo implements OnInit {
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
<p-table [value]="customers" sortField="representative.name" sortMode="single" dataKey="representative.name" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{'min-width': '70rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th style="width:20%">Name</th>
            <th style="width:20%">Country</th>
            <th style="width:20%">Company</th>
            <th style="width:20%">Status</th>
            <th style="width:20%">Date</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="groupheader" let-customer let-rowIndex="rowIndex" let-expanded="expanded">
        <tr>
            <td colspan="5">
                <button type="button" pButton pRipple [pRowToggler]="customer" class="p-button-text p-button-rounded p-button-plain mr-2" [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"></button>
                <img [alt]="customer.representative.name" src="assets/showcase/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                <span class="font-bold ml-2">{{customer.representative.name}}</span>
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="groupfooter" let-customer>
        <tr class="p-rowgroup-footer">
            <td colspan="4" style="text-align: right">Total Customers</td>
            <td>{{calculateCustomerTotal(customer.representative.name)}}</td>
        </tr>
    </ng-template>
    <ng-template pTemplate="rowexpansion" let-customer>
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
    <p-table [value]="customers" sortField="representative.name" sortMode="single" dataKey="representative.name" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{'min-width': '70rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th style="width:20%">Name</th>
                <th style="width:20%">Country</th>
                <th style="width:20%">Company</th>
                <th style="width:20%">Status</th>
                <th style="width:20%">Date</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="groupheader" let-customer let-rowIndex="rowIndex" let-expanded="expanded">
            <tr>
                <td colspan="5">
                    <button type="button" pButton pRipple [pRowToggler]="customer" class="p-button-text p-button-rounded p-button-plain mr-2" [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"></button>
                    <img [alt]="customer.representative.name" src="assets/showcase/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                    <span class="font-bold ml-2">{{customer.representative.name}}</span>
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="groupfooter" let-customer>
            <tr class="p-rowgroup-footer">
                <td colspan="4" style="text-align: right">Total Customers</td>
                <td>{{calculateCustomerTotal(customer.representative.name)}}</td>
            </tr>
        </ng-template>
        <ng-template pTemplate="rowexpansion" let-customer>
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
    selector: 'table-expandable-row-group-demo',
    templateUrl: 'table-expandable-row-group-demo'
})
export class TableExpandableRowGroupDemo implements OnInit{
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
        scss: `
:host ::ng-deep .p-rowgroup-footer td {
    font-weight: 700;
}

:host ::ng-deep .p-rowgroup-header {
    span {
        font-weight: 700;
    }

    .p-row-toggler {
        vertical-align: middle;
        margin-right: .25rem;
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
