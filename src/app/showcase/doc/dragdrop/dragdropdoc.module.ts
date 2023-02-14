import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { DataTableDocComponent } from './datatabledoc';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { BasicDocComponent } from './basicdoc';
import { DropIndicatorDocComponent } from './dropindicatordoc';
import { PanelModule } from 'primeng/panel';
import { DragHandleDocComponent } from './draghandledoc';
import { DraggableEventsDocComponent } from './draggableeventsdoc';
import { DraggablePropsDocComponent } from './draggablepropsdoc';
import { DroppableEventsDocComponent } from './droppableeventsdoc';
import { DroppablePropsDocComponent } from './droppablepropsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, DragDropModule, TableModule, FormsModule, PanelModule],
    exports: [
        BasicDocComponent,
        DataTableDocComponent,
        ImportDocComponent,
        DropIndicatorDocComponent,
        DragHandleDocComponent,
        DraggableEventsDocComponent,
        DraggablePropsDocComponent,
        DroppableEventsDocComponent,
        DroppablePropsDocComponent,
        AppDocModule
    ],
    declarations: [BasicDocComponent, DataTableDocComponent, ImportDocComponent, DropIndicatorDocComponent, DragHandleDocComponent, DraggableEventsDocComponent, DraggablePropsDocComponent, DroppableEventsDocComponent, DroppablePropsDocComponent]
})
export class DragDropDocModule {}
