import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TabMenuDemo } from './tabmenudemo';
import { TabMenuDemoRoutingModule } from './tabmenudemo-routing.module';

@NgModule({
    imports: [CommonModule, TabMenuDemoRoutingModule, TabMenuModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [TabMenuDemo]
})
export class TabMenuDemoModule {}
