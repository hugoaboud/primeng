import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { SkeletonDemo } from './skeletondemo';
import { SkeletonDemoRoutingModule } from './skeletondemo-routing.module';

@NgModule({
    imports: [CommonModule, SkeletonDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, SkeletonModule, TableModule, AppCodeModule, AppDemoActionsModule],
    declarations: [SkeletonDemo]
})
export class SkeletonDemoModule {}
