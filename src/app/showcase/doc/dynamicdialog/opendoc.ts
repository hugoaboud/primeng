import { Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Code } from '../../domain/code';
import { ProductListDemo } from './productlistdemo';

@Component({
    selector: 'open-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>The <i>open</i> method of the <i>DialogService</i> is used to open a Dialog. First parameter is the component to load and second one is the configuration object to customize the Dialog.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    </div>`,
    providers: [DialogService]
})
export class OpenDocComponent {
    @Input() id: string;

    @Input() title: string;

    constructor(public dialogService: DialogService) {}

    ref: DynamicDialogRef;

    show() {
        this.ref = this.dialogService.open(ProductListDemo, { header: 'Select a Product' });
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
        this.ref = this.dialogService.open(ProductListDemo, { header: 'Select a Product'});
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
