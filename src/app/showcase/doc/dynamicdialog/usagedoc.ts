import { Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Code } from '../../domain/code';

@Component({
    selector: 'usage-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>To use dynamic dialog, a reference should be declared as <i>DynamicDialogRef</i> after the <i>DialogService</i> injected into the component.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    </div>`,
    providers: [DialogService]
})
export class UsageDocComponent {
    @Input() id: string;

    @Input() title: string;

    ref: DynamicDialogRef;

    constructor(public dialogService: DialogService) {}

    code: Code = {
        typescript: `
import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '../../domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class DynamicDialogDemo implements OnDestroy {
    
    ref: DynamicDialogRef;

    constructor(public dialogService: DialogService) {}
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
