import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ConfirmDialogDemo } from './confirmdialogdemo';
import { ConfirmDialogDemoRoutingModule } from './confirmdialogdemo-routing.module';

@NgModule({
    imports: [CommonModule, ConfirmDialogDemoRoutingModule, ConfirmDialogModule, ButtonModule, ToastModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ConfirmDialogDemo]
})
export class ConfirmDialogDemoModule {}
