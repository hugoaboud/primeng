import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'datatable-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Drag and Drop to Table</p>
        </app-docsectiontext>
        <div class="card grid grid-nogutter">
            <div class="col-12 md:col-6 drag-column">
                <div *ngFor="let product of availableProducts">
                    <div class="product-item" pDraggable="products" (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">
                        <div class="image-container">
                            <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="product-image" />
                        </div>
                        <div class="product-list-detail">
                            <h5 class="mb-2">{{ product.name }}</h5>
                            <i class="pi pi-tag product-category-icon"></i>
                            <span class="product-category">{{ product.category }}</span>
                        </div>
                        <div class="product-list-action">
                            <h6 class="mb-2">{{ product.price }}</h6>
                            <span [class]="'product-badge status-' + product.inventoryStatus.toLowerCase()">{{ product.inventoryStatus }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6 drop-column" pDroppable="products" (onDrop)="drop()">
                <p-table [value]="selectedProducts">
                    <ng-template pTemplate="header">
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-product>
                        <tr>
                            <td>{{ product.id }}</td>
                            <td>{{ product.category }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.price }}</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [ProductService]
})
export class DataTableDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    availableProducts!: Product[];

    selectedProducts!: Product[];

    draggedProduct!: Product;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.selectedProducts = [];
        this.productService.getProductsSmall().then((products) => (this.availableProducts = products));
    }

    dragStart(product: Product) {
        this.draggedProduct = product;
    }

    drop() {
        if (this.draggedProduct) {
            let draggedProductIndex = this.findIndex(this.draggedProduct);
            this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
            this.availableProducts = this.availableProducts.filter((val, i) => i != draggedProductIndex);
            this.draggedProduct = null;
        }
    }

    dragEnd() {
        this.draggedProduct = null;
    }

    findIndex(product: Product) {
        let index = -1;
        for (let i = 0; i < this.availableProducts.length; i++) {
            if (product.id === this.availableProducts[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }

    code: Code = {
        basic: `
<div class="card grid grid-nogutter">
    <div class="col-12 md:col-6 drag-column">
        <div *ngFor="let product of availableProducts">
            <div class="product-item" pDraggable="products" (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">
                <div class="image-container">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}"[alt]="product.name" class="product-image" />
                </div>
                <div class="product-list-detail">
                    <h5 class="mb-2">{{product.name}}</h5>
                    <i class="pi pi-tag product-category-icon"></i>
                    <span class="product-category">{{product.category}}</span>
                    </div>
                    <div class="product-list-action">
                    <h6 class="mb-2">{{product.price}}</h6>
                    <span [class]="'product-badge status-' + product.inventoryStatus.toLowerCase()">{{product.inventoryStatus}}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 drop-column" pDroppable="products" (onDrop)="drop()">
    <p-table [value]="selectedProducts">
        <ng-template pTemplate="header">
            <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                    <td>{{product.id}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                </tr>
            </ng-template>
        </p-table>
    </div>
</div>`,
        html: `
<div class="card grid grid-nogutter">
    <div class="col-12 md:col-6 drag-column">
        <div *ngFor="let product of availableProducts">
            <div class="product-item" pDraggable="products" (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">
                <div class="image-container">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}"[alt]="product.name" class="product-image" />
                </div>
                <div class="product-list-detail">
                    <h5 class="mb-2">{{product.name}}</h5>
                    <i class="pi pi-tag product-category-icon"></i>
                    <span class="product-category">{{product.category}}</span>
                    </div>
                    <div class="product-list-action">
                    <h6 class="mb-2">{{product.price}}</h6>
                    <span [class]="'product-badge status-' + product.inventoryStatus.toLowerCase()">{{product.inventoryStatus}}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 drop-column" pDroppable="products" (onDrop)="drop()">
    <p-table [value]="selectedProducts">
        <ng-template pTemplate="header">
            <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                    <td>{{product.id}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                </tr>
            </ng-template>
        </p-table>
    </div>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';

@Component({
    templateUrl: './dragdropdemo.html',
    styleUrls: ['./dragdropdemo.scss'],
    providers: [ProductService]
})
export class DragDropDemo implements OnInit {

    availableProducts!: Product[];

    selectedProducts!: Product[];

    draggedProduct!: Product;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.selectedProducts = [];
        this.productService.getProductsSmall().then((products) => (this.availableProducts = products));
    }

    dragStart(product: Product) {
        this.draggedProduct = product;
    }

    drop() {
        if (this.draggedProduct) {
            let draggedProductIndex = this.findIndex(this.draggedProduct);
            this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
            this.availableProducts = this.availableProducts.filter((val, i) => i != draggedProductIndex);
            this.draggedProduct = null;
        }
    }

    dragEnd() {
        this.draggedProduct = null;
    }

    findIndex(product: Product) {
        let index = -1;
        for (let i = 0; i < this.availableProducts.length; i++) {
            if (product.id === this.availableProducts[i].id) {
                index = i;
                break;
            }
        }
        return index;
    } 
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { DragDropDemo } from './dragdropdemo';
import { DragDropDemoRoutingModule } from './dragdropdemo-routing.module';

@NgModule({
    imports: [CommonModule, DragDropDemoRoutingModule, TableModule, DragDropModule, FormsModule],
    declarations: [DragDropDemo]
})
export class DragDropDemoModule {}`,
        scss: `
:host ::ng-deep {
    .drag-column {
        padding-right: .5em;
    }
    
    .drop-column {
        border: 1px solid transparent;
        transition: border-color .2s;
    
        &.p-draggable-enter {
            border-color: var(--primary-color); 
        }
    }
    
    .product-item {
        display: flex;
        align-items: center;
        padding: 1rem;
        width: 100%;
        border-bottom: 1px solid var(--surface-d);
    
        img {
            width: 75px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            margin-right: 1rem;
        }
    
        .product-list-detail {
            flex: 1 1 0;
        }
    
        .product-list-action {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    
        .product-category-icon {
            vertical-align: middle;
            margin-right: .5rem;
        }
    
        .product-category {
            vertical-align: middle;
            line-height: 1;
        }
    }
    
    [pDraggable] {
        cursor: move;
    }
    
    @media screen and (max-width: 576px) {
        .product-item {
            flex-wrap: wrap;
    
            .image-container {
                width: 100%;
                text-align: center;
            }
    
            img {
                margin: 0 0 1rem 0;
                width: 100px;
            }
        }
    }
}`,
        data: `
...
{
    "id": "1000",
    "code": "f230fh0g3",
    "name": "Bamboo Watch",
    "description": "Product Description",
    "image": "bamboo-watch.jpg",
    "price": 65,
    "category": "Accessories",
    "quantity": 24,
    "inventoryStatus": "INSTOCK",
    "rating": 5
},
...`
    };
}
