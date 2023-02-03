import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { DragDropDemo } from './dragdropdemo';
import { DragDropDemoRoutingModule } from './dragdropdemo-routing.module';

@NgModule({
    imports: [CommonModule, DragDropDemoRoutingModule, DragDropModule, PanelModule, TableModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [DragDropDemo]
})
export class DragDropDemoModule {}
