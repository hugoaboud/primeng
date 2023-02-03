import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { OverlayPanelDemo } from './overlaypaneldemo';
import { OverlayPanelDemoRoutingModule } from './overlaypaneldemo-routing.module';

@NgModule({
    imports: [CommonModule, OverlayPanelDemoRoutingModule, OverlayPanelModule, ButtonModule, TableModule, TabViewModule, AppCodeModule, AppDemoActionsModule, ToastModule],
    declarations: [OverlayPanelDemo]
})
export class OverlayPanelDemoModule {}
