import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ProgressBarDemo } from './progressbardemo';
import { ProgressBarDemoRoutingModule } from './progressbardemo-routing.module';

@NgModule({
    imports: [CommonModule, ProgressBarDemoRoutingModule, ProgressBarModule, ToastModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ProgressBarDemo]
})
export class ProgressBarDemoModule {}
