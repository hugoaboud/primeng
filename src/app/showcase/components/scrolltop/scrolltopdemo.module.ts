import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ScrollTopDemo } from './scrolltopdemo';
import { ScrollTopDemoRoutingModule } from './scrolltopdemo-routing.module';

@NgModule({
    imports: [CommonModule, ScrollTopDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, ScrollTopModule, ScrollPanelModule, TableModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ScrollTopDemo]
})
export class ScrollTopDemoModule {}
