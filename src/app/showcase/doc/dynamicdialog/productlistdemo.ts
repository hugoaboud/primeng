import { Component, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { DynamicDialogRef } from '../../../components/dynamicdialog/dynamicdialog-ref';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    template: ` <p-table [value]="products" responsiveLayout="scroll" [paginator]="true" [rows]="5" [responsive]="true">
        <ng-template pTemplate="header">
            <tr>
                <th pSortableColumn="name">Name <p-sortIcon field="vin"></p-sortIcon></th>
                <th pSortableColumn="year">Image</th>
                <th pSortableColumn="price">Brand <p-sortIcon field="price"></p-sortIcon></th>
                <th pSortableColumn="inventoryStatus">Status <p-sortIcon field="inventoryStatus"></p-sortIcon></th>
                <th style="width:4em"></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{ product.name }}</td>
                <td><img src="assets/showcase/images/demo/product/{{ product.image }}" [alt]="product.image" class="w-4rem h-4rem shadow-2" /></td>
                <td>{{ product.price }}</td>
                <td>
                    <span [class]="'product-badge status-' + product.inventoryStatus.toLowerCase()">{{ product.inventoryStatus }}</span>
                </td>
                <td>
                    <button type="button" pButton icon="pi pi-plus" (click)="selectProduct(product)"></button>
                </td>
            </tr>
        </ng-template>
    </p-table>`
})
export class ProductListDemo implements OnInit {
    products: Product[];

    constructor(private productService: ProductService, public ref: DynamicDialogRef) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => (this.products = products));
    }

    selectProduct(product: Product) {
        this.ref.close(product);
    }
}
