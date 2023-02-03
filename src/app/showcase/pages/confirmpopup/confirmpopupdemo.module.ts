import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MessagesModule } from 'primeng/messages';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ConfirmPopupDemo } from './confirmpopupdemo';
import { ConfirmPopupDemoRoutingModule } from './confirmpopupdemo-routing.module';

@NgModule({
    imports: [CommonModule, ConfirmPopupDemoRoutingModule, ConfirmPopupModule, ButtonModule, MessagesModule, ToastModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ConfirmPopupDemo]
})
export class ConfirmPopupDemoModule {}
