import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';

@Component({
    selector: 'datatable-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>An example that displays a DataTable inside a popup to select an item.</p>
        </app-docsectiontext>
        <div class="card flex flex-column align-items-center gap-3">
            <p-toast></p-toast>
            <p-button (click)="op.toggle($event)" icon="pi pi-search" label="Search"></p-button>
            <div *ngIf="selectedProduct" class="p-5 surface-card shadow-2 border-round">
                <div class="relative">
                    <img src="https://primefaces.org/cdn/primereact/images/product/{{ selectedProduct.image }}" [alt]="selectedProduct.name" />
                </div>
                <div class="flex align-items-center justify-content-between mt-3 mb-2">
                    <span class="text-900 font-medium text-xl">{{ selectedProduct.name }}</span>
                    <span class="text-900 text-xl ml-3">{{ '$' + selectedProduct.price }}</span>
                </div>
                <span class="text-600">{{ selectedProduct.category }}</span>
            </div>
            <p-overlayPanel #op [style]="{ width: '450px' }" [showCloseIcon]="true">
                <ng-template pTemplate="content">
                    <p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" (onRowSelect)="onRowSelect($event, op)" [paginator]="true" [rows]="5" responsiveLayout="scroll">
                        <ng-template pTemplate="header">
                            <tr>
                                <th pSortableColumn="name">Name<p-sortIcon field="name"></p-sortIcon></th>
                                <th>Image</th>
                                <th pSortableColumn="price">Price <p-sortIcon field="price"></p-sortIcon></th>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="body" let-rowData let-product>
                            <tr [pSelectableRow]="rowData">
                                <td>{{ product.name }}</td>
                                <td><img src="assets/showcase/images/demo/product/{{ product.image }}" [alt]="product.image" class="w-5rem shadow-2" /></td>
                                <td>{{ product.price }}</td>
                            </tr>
                        </ng-template>
                    </p-table>
                </ng-template>
            </p-overlayPanel>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [ProductService, MessageService]
})
export class DataTableDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    products!: Product[];

    selectedProduct!: Product;

    constructor(private productService: ProductService, private messageService: MessageService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
            this.selectedProduct = products[0];
        });
    }

    onRowSelect(event, op: OverlayPanel) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
        op.hide();
    }

    code: Code = {
        basic: `
<p-toast></p-toast>
<p-button (click)="op.toggle($event)" icon="pi pi-search" label="Search"></p-button>
<div *ngIf="selectedProduct" class="p-5 surface-card shadow-2 border-round">
    <div class="relative">
        <img src="https://primefaces.org/cdn/primereact/images/product/{{selectedProduct.image}}" [alt]="selectedProduct.name" />
    </div>
    <div class="flex align-items-center justify-content-between mt-3 mb-2">
        <span class="text-900 font-medium text-xl">{{selectedProduct.name}}</span>
        <span class="text-900 text-xl ml-3">{{'$' + selectedProduct.price}}</span>
    </div>
    <span class="text-600">{{selectedProduct.category}}</span>
</div>
<p-overlayPanel #op [style]="{'width': '450px'}" [showCloseIcon]="true">
    <ng-template pTemplate="content">
        <p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" (onRowSelect)="onRowSelect($event, op)" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template pTemplate="header">
                <tr>
                    <th pSortableColumn="name">Name<p-sortIcon field="name"></p-sortIcon></th>
                    <th>Image</th>
                    <th pSortableColumn="price">Price <p-sortIcon field="price"></p-sortIcon></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-rowData let-product>
                <tr [pSelectableRow]="rowData">
                    <td>{{product.name}}</td>
                    <td><img src="assets/showcase/images/demo/product/{{product.image}}" [alt]="product.image" class="w-5rem shadow-2"/></td>
                    <td>{{product.price}}</td>
                </tr>
            </ng-template>
        </p-table>
    </ng-template>
</p-overlayPanel>`,

        html: `
<div class="card flex flex-column align-items-center gap-3">
    <p-toast></p-toast>
    <p-button (click)="op.toggle($event)" icon="pi pi-search" label="Search"></p-button>
    <div *ngIf="selectedProduct" class="p-5 surface-card shadow-2 border-round">
        <div class="relative">
            <img src="https://primefaces.org/cdn/primereact/images/product/{{selectedProduct.image}}" [alt]="selectedProduct.name" />
        </div>
        <div class="flex align-items-center justify-content-between mt-3 mb-2">
            <span class="text-900 font-medium text-xl">{{selectedProduct.name}}</span>
            <span class="text-900 text-xl ml-3">{{'$' + selectedProduct.price}}</span>
        </div>
        <span class="text-600">{{selectedProduct.category}}</span>
    </div>
    <p-overlayPanel #op [style]="{'width': '450px'}" [showCloseIcon]="true">
        <ng-template pTemplate="content">
            <p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" (onRowSelect)="onRowSelect($event, op)" [paginator]="true" [rows]="5" responsiveLayout="scroll">
                <ng-template pTemplate="header">
                    <tr>
                        <th pSortableColumn="name">Name<p-sortIcon field="name"></p-sortIcon></th>
                        <th>Image</th>
                        <th pSortableColumn="price">Price <p-sortIcon field="price"></p-sortIcon></th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-rowData let-product>
                    <tr [pSelectableRow]="rowData">
                        <td>{{product.name}}</td>
                        <td><img src="assets/showcase/images/demo/product/{{product.image}}" [alt]="product.image" class="w-5rem shadow-2"/></td>
                        <td>{{product.price}}</td>
                    </tr>
                </ng-template>
            </p-table>
        </ng-template>
    </p-overlayPanel>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';

@Component({
    templateUrl: './overlaypaneldemo.html'
})
export class OverlayPanelDemo implements OnInit {

    products!: Product[];

    selectedProduct!: Product;

    constructor(private productService: ProductService, private messageService: MessageService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
            this.selectedProduct = products[0];
        });
    }

    onRowSelect(event, op: OverlayPanel) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
        op.hide();
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button'; 
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { OverlayPanelDemo } from './overlaypaneldemo';

@NgModule({
    imports: [CommonModule, OverlayPanelModule, ButtonModule, TableModule, ToastModule],
    declarations: [OverlayPanelDemo]
})
export class OverlayPanelDemoModule {}`
    };
}
