import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { SortEvent } from 'primeng/api';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-custom-sort-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id" [level]="3">
            <p>
                Instead of using the built-in sorting algorithm a custom sort can be attached by enabling <i>customSort</i> property and defining a sortFunction implementation. This function gets a SortEvent instance that provides the data to sort,
                <i>sortField</i>, <i>sortOrder</i> and <i>multiSortMeta</i>.
            </p></app-docsectiontext
        >
        <div class="card">
            <p-table [value]="products" (sortFunction)="customSort($event)" [customSort]="true" [tableStyle]="{ 'min-width': '60rem' }">
                <ng-template pTemplate="header">
                    <tr>
                        <th pSortableColumn="code" style="width:20%">Code <p-sortIcon field="code"></p-sortIcon></th>
                        <th pSortableColumn="name" style="width:20%">Name <p-sortIcon field="name"></p-sortIcon></th>
                        <th pSortableColumn="category" style="width:20%">Category <p-sortIcon field="category"></p-sortIcon></th>
                        <th pSortableColumn="quantity" style="width:20%">Quantity <p-sortIcon field="quantity"></p-sortIcon></th>
                        <th pSortableColumn="price" style="width:20%">Price <p-sortIcon field="price"></p-sortIcon></th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-product>
                    <tr>
                        <td>{{ product.code }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.price | currency: 'USD' }}</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code" selector="table-custom-sort-demo" [extFiles]="extFiles"></app-code>
    </div>`
})
export class TableCustomSortDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => (this.products = data));
    }

    customSort(event: SortEvent) {
        event.data.sort((data1, data2) => {
            let value1 = data1[event.field];
            let value2 = data2[event.field];
            let result = null;

            if (value1 == null && value2 != null) result = -1;
            else if (value1 != null && value2 == null) result = 1;
            else if (value1 == null && value2 == null) result = 0;
            else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
            else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

            return event.order * result;
        });
    }

    code: Code = {
        basic: `
<p-table [value]="products" (sortFunction)="customSort($event)" [customSort]="true" [tableStyle]="{'min-width': '60rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th pSortableColumn="code" style="width:20%">Code <p-sortIcon field="code"></p-sortIcon></th>
            <th pSortableColumn="name" style="width:20%">Name <p-sortIcon field="name"></p-sortIcon></th>
            <th pSortableColumn="category" style="width:20%">Category <p-sortIcon field="category"></p-sortIcon></th>
            <th pSortableColumn="quantity" style="width:20%">Quantity <p-sortIcon field="quantity"></p-sortIcon></th>
            <th pSortableColumn="price" style="width:20%">Price <p-sortIcon field="price"></p-sortIcon></th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
            <td>{{product.price | currency: 'USD'}}</td>
        </tr>
    </ng-template>
</p-table>`,
        html: `
<div class="card">
    <p-table [value]="products" (sortFunction)="customSort($event)" [customSort]="true" [tableStyle]="{'min-width': '60rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th pSortableColumn="code" style="width:20%">Code <p-sortIcon field="code"></p-sortIcon></th>
                <th pSortableColumn="name" style="width:20%">Name <p-sortIcon field="name"></p-sortIcon></th>
                <th pSortableColumn="category" style="width:20%">Category <p-sortIcon field="category"></p-sortIcon></th>
                <th pSortableColumn="quantity" style="width:20%">Quantity <p-sortIcon field="quantity"></p-sortIcon></th>
                <th pSortableColumn="price" style="width:20%">Price <p-sortIcon field="price"></p-sortIcon></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
                <td>{{product.price | currency: 'USD'}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';
import { SortEvent } from 'primeng/api';

@Component({
    selector: 'table-custom-sort-demo',
    templateUrl: 'table-custom-sort-demo'
})
export class TableCustomSortDemo implements OnInit {
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => (this.products = data));
    }

    customSort(event: SortEvent) {
        event.data.sort((data1, data2) => {
            let value1 = data1[event.field];
            let value2 = data2[event.field];
            let result = null;

            if (value1 == null && value2 != null) result = -1;
            else if (value1 != null && value2 == null) result = 1;
            else if (value1 == null && value2 == null) result = 0;
            else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
            else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

            return event.order * result;
        });
    }
}`,
        service: ['ProductService']
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
