import { Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Code } from '../../domain/code';
import { ProductListDemo } from './productlistdemo';

@Component({
    selector: 'passingdata-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                In case you need to pass data to the component that is dynamically loaded, use the <i>data</i> property that can be access using the DynamicDialogConfig class. In additon, the loaded component can also control the Dialog using the
                DynamicDialogRef API. Both the DynamicDialogConfig and DynamicDialogRef are injectable using the constructor.
            </p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    </div>`,
    providers: [DialogService]
})
export class PassingDataDocComponent {
    @Input() id: string;

    @Input() title: string;

    ref: DynamicDialogRef;

    constructor(public dialogService: DialogService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            data: {
                id: '51gF3'
            },
            header: 'Select a Product'
        });
    }

    code: Code = {
        typescript: `
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class DynamicDialogDemo {

    ref: DynamicDialogRef;
    
    constructor(public dialogService: DialogService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, { 
            data: {
                id: '51gF3'
            },
            header: 'Select a Product'
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
