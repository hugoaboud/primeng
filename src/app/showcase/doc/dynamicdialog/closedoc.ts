import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    selector: 'close-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                Most of the time, requirement is returning a value from the dialog. DialogRef's close method is used for this purpose where the parameter passed will be available at the <i>onClose</i> event at the caller. Here is an example on how to
                close the dialog from the ProductListDemo by passing a selected product.
            </p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    </div>`,
    providers: [DialogService, MessageService]
})
export class CloseDocComponent {
    @Input() id: string;

    @Input() title: string;

    constructor(public dialogService: DialogService, public messageService: MessageService) {}

    ref: DynamicDialogRef;

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Select a Product',
            width: '70%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true
        });

        this.ref.onClose.subscribe((product: Product) => {
            if (product) {
                this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
            }
        });
    }

    code: Code = {
        typescript: `
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '../../domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService, MessageService]
})
export class DynamicDialogDemo {

    ref: DynamicDialogRef;
    
    constructor(public dialogService: DialogService, public messageService: MessageService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Select a Product',
            width: '70%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true
        });

        this.ref.onClose.subscribe((product: Product) => {
            if (product) {
                this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
            }
        });
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DynamicDialogDemo } from './dynamicdialogdemo';
import { ProductListDemo } from './productlistdemo';

@NgModule({
    imports: [CommonModule, FormsModule, DynamicDialogModule, ButtonModule, TableModule],
    declarations: [
        DynamicDialogDemo,
        ProductListDemo
    ],
    entryComponents: [ProductListDemo]
})
export class DynamicDialogDemoModule {}`
    };
}
