import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { OrganizationChartDemo } from './organizationchartdemo';
import { OrganizationChartDemoRoutingModule } from './organizationchartdemo-routing.module';

@NgModule({
    imports: [CommonModule, OrganizationChartDemoRoutingModule, OrganizationChartModule, ToastModule, PanelModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [OrganizationChartDemo]
})
export class OrganizationChartDemoModule {}
