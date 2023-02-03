import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { PanelMenuDemo } from './panelmenudemo';
import { PanelMenuDemoRoutingModule } from './panelmenudemo-routing.module';

@NgModule({
    imports: [CommonModule, PanelMenuDemoRoutingModule, PanelMenuModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [PanelMenuDemo]
})
export class PanelMenuDemoModule {}
