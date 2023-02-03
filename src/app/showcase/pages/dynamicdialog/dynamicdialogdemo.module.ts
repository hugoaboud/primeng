import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { DynamicDialogModule } from '../../../components/dynamicdialog/dynamicdialog';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { DynamicDialogDemo } from './dynamicdialogdemo';
import { DynamicDialogDemoRoutingModule } from './dynamicdialogdemo-routing.module';
import { ProductListDemo } from './productlistdemo';

@NgModule({
    imports: [CommonModule, DynamicDialogDemoRoutingModule, DynamicDialogModule, ToastModule, TableModule, ButtonModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [DynamicDialogDemo, ProductListDemo],
    entryComponents: [ProductListDemo]
})
export class DynamicDialogDemoModule {}
