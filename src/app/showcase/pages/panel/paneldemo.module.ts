import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { PanelDemo } from './paneldemo';
import { PanelDemoRoutingModule } from './paneldemo-routing.module';

@NgModule({
    imports: [CommonModule, PanelDemoRoutingModule, PanelModule, ToastModule, TabViewModule, AppCodeModule, MenuModule, AppDemoActionsModule],
    declarations: [PanelDemo]
})
export class PanelDemoModule {}
