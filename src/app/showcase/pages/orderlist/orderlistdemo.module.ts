import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { OrderListDemo } from './orderlistdemo';
import { OrderListDemoRoutingModule } from './orderlistdemo-routing.module';

@NgModule({
    imports: [CommonModule, OrderListDemoRoutingModule, OrderListModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [OrderListDemo]
})
export class OrderListDemoModule {}
