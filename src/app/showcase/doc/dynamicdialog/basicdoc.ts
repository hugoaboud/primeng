import { Component, Input, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                Dynamic dialogs require an instance of a <i>DialogService</i> that is responsible for displaying a dialog with a component as its content. Since the dynamically loaded content is not defined at build time, a configuration is necessary
                using the <i>entryComponents</i> of your parent module. Calling <i>open</i> method of <i>DialogService</i> will display dynamic dialog. First parameter of <i>open</i> method is the type of component to load and the second parameter is
                the configuration of the Dialog such as <i>header</i>, <i>width</i> and more.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-toast></p-toast>
            <p-button (click)="show()" icon="pi pi-info-circle" label="Show"></p-button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [DialogService, MessageService]
})
export class BasicDocComponent implements OnDestroy {
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

        this.ref.onMaximize.subscribe((value) => {
            this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
        });
    }

    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }

    code: Code = {
        basic: `
<p-toast></p-toast>
<p-button (click)="show()" icon="pi pi-info-circle" label="Show"></p-button>`,

        html: `
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-button (click)="show()" icon="pi pi-info-circle" label="Show"></p-button>
</div>`,

        typescript: `
import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '../../domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService, MessageService]
})
export class DynamicDialogDemo implements OnDestroy {
    
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

        this.ref.onMaximize.subscribe((value) => {
            this.messageService.add({ severity: 'info', summary: 'Maximized', detail: \`maximized: \${value.maximized}\` });
        });
    }

    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogDemo } from './dynamicdialogdemo';
import { ProductListDemo } from './productlistdemo';

@NgModule({
    imports: [CommonModule, FormsModule, DynamicDialogModule, ButtonModule, ToastModule, TableModule],
    declarations: [
        DynamicDialogDemo,
        ProductListDemo
    ],
    entryComponents: [ProductListDemo]
})
export class DynamicDialogDemoModule {}`
    };
}
