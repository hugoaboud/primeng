import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ContextMenuDemo } from './contextmenudemo';
import { ContextMenuDemoRoutingModule } from './contextmenudemo-routing.module';

@NgModule({
    imports: [CommonModule, ContextMenuDemoRoutingModule, ContextMenuModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [ContextMenuDemo]
})
export class ContextMenuDemoModule {}
