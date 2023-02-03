import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { BreadcrumbDemo } from './breadcrumbdemo';
import { BreadcrumbDemoRoutingModule } from './breadcrumbdemo-routing.module';

@NgModule({
    imports: [CommonModule, BreadcrumbDemoRoutingModule, BreadcrumbModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [BreadcrumbDemo]
})
export class BreadcrumbDemoModule {}
