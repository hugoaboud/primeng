import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeferModule } from 'primeng/defer';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { DeferDemo } from './deferdemo';
import { DeferDemoRoutingModule } from './deferdemo-routing.module';

@NgModule({
    imports: [CommonModule, DeferDemoRoutingModule, DeferModule, ToastModule, TabViewModule, TableModule, AppDemoActionsModule, AppCodeModule],
    declarations: [DeferDemo]
})
export class DeferDemoModule {}
