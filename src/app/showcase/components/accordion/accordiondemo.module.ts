import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { AccordionDemo } from './accordiondemo';
import { AccordionDemoRoutingModule } from './accordiondemo-routing.module';

@NgModule({
    imports: [CommonModule, AccordionDemoRoutingModule, AccordionModule, ButtonModule, TabViewModule, ToastModule, AppCodeModule, AppDemoActionsModule],
    declarations: [AccordionDemo]
})
export class AccordionDemoModule {}
