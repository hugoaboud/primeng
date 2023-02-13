import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';

@Component({
    selector: 'datatable-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p><i>pDraggable</i> and <i>pDroppable</i> are attached to a target element to add drag-drop behavior. The value of a Directive attribute is required
            and it defines the scope to match draggables with droppables. Droppable scope can also be an array to accept multiple droppables.</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap gap-3">
            <div class="p-2 border-1 surface-border border-round w-15rem">
                <ul class="list-none flex flex-column gap-2 p-0 m-0">
                    <li *ngFor="let product of availableProducts" class="p-2 border-round shadow-1" pDraggable (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">
                        {{product.name}}
                    </li>
                </ul>
            </div>
            <div class="p-2 border-1 surface-border border-round w-15rem" pDroppable (onDrop)="drop()">
                <p class="text-center surface-border border-bottom-1">Drop Zone</p>
                <ul class="list-none flex flex-column gap-2 p-0 m-0" *ngIf="selectedProducts" >
                    <li *ngFor="let product of selectedProducts" class="p-2 border-round shadow-1">
                        {{product.name}}
                    </li>
                </ul>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    availableProducts!: Product[];

    selectedProducts!: Product[];

    draggedProduct!: Product;

    ngOnInit() {
        this.selectedProducts = [];
        this.availableProducts = [
            {id:'1', name: 'Black Watch'},
            {id:'2', name: 'Bamboo Watch'}
        ]
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
<div class="p-2 border-1 surface-border border-round w-15rem">
    <ul class="list-none flex flex-column gap-2 p-0 m-0">
        <li *ngFor="let product of availableProducts" class="p-2 border-round shadow-1" pDraggable (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">
            {{product.name}}
        </li>
    </ul>
</div>
<div class="p-2 border-1 surface-border border-round w-15rem" pDroppable (onDrop)="drop()">
    <p class="text-center surface-border border-bottom-1">Drop Zone</p>
    <ul class="list-none flex flex-column gap-2 p-0 m-0" *ngIf="selectedProducts" >
        <li *ngFor="let product of selectedProducts" class="p-2 border-round shadow-1">
            {{product.name}}
        </li>
    </ul>
</div>`,
        html: `
<div class="card flex flex-wrap gap-3">
    <div class="p-2 border-1 surface-border border-round w-15rem">
        <ul class="list-none flex flex-column gap-2 p-0 m-0">
            <li *ngFor="let product of availableProducts" class="p-2 border-round shadow-1" pDraggable (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">
                {{product.name}}
            </li>
        </ul>
    </div>
    <div class="p-2 border-1 surface-border border-round w-15rem" pDroppable (onDrop)="drop()">
        <p class="text-center surface-border border-bottom-1">Drop Zone</p>
        <ul class="list-none flex flex-column gap-2 p-0 m-0" *ngIf="selectedProducts" >
            <li *ngFor="let product of selectedProducts" class="p-2 border-round shadow-1">
                {{product.name}}
            </li>
        </ul>
    </div>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';

@Component({
    templateUrl: './dragdropdemo.html',
    styleUrls: ['./dragdropdemo.scss']
})

export class DragDropDemo implements OnInit {

    availableProducts!: Product[];

    selectedProducts!: Product[];

    draggedProduct!: Product;

    ngOnInit() {
        this.selectedProducts = [];
        this.availableProducts = [
            {id:'1', name: 'Black Watch'},
            {id:'2', name: 'Bamboo Watch'}
        ]
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
import { DragDropDemo } from './dragdropdemo';
import { DragDropDemoRoutingModule } from './dragdropdemo-routing.module';

@NgModule({
    imports: [CommonModule, DragDropDemoRoutingModule, DragDropModule, FormsModule],
    declarations: [DragDropDemo]
})
export class DragDropDemoModule {}`,
        scss: `
:host ::ng-deep {
    [pDraggable] {
        cursor: move;
    }
}`,
    };
}
