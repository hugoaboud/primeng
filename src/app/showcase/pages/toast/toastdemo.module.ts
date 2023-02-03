import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ToastDemo } from './toastdemo';
import { ToastDemoRoutingModule } from './toastdemo-routing.module';

@NgModule({
    imports: [CommonModule, ToastDemoRoutingModule, ToastModule, ButtonModule, TabViewModule, RippleModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ToastDemo]
})
export class ToastDemoModule {}
