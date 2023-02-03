import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DockModule } from 'primeng/dock';
import { GalleriaModule } from 'primeng/galleria';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { TerminalModule } from 'primeng/terminal';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { DockDemo } from './dockdemo';
import { DockDemoRoutingModule } from './dockdemo-routing.module';

@NgModule({
    imports: [CommonModule, DockDemoRoutingModule, CardModule, DockModule, TabViewModule, AppCodeModule, MenubarModule, DialogModule, TerminalModule, TreeModule, ToastModule, GalleriaModule, AppDemoActionsModule],
    declarations: [DockDemo]
})
export class DockDemoModule {}
