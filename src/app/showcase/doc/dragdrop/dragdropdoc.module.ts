import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { DragDropDataTableDemo } from './datatabledoc';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { DragDropBasicDemo } from './basicdoc';
import { DropIndicatorDocComponent } from './dropindicatordoc';
import { PanelModule } from 'primeng/panel';
import { DragDropDragHandleDemo } from './draghandledoc';
import { DraggableEventsDocComponent } from './draggableeventsdoc';
import { DraggablePropsDocComponent } from './draggablepropsdoc';
import { DroppableEventsDocComponent } from './droppableeventsdoc';
import { DroppablePropsDocComponent } from './droppablepropsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, DragDropModule, TableModule, FormsModule, PanelModule],
    declarations: [DragDropBasicDemo, DragDropDataTableDemo, ImportDocComponent, DropIndicatorDocComponent, DragDropDragHandleDemo, DraggableEventsDocComponent, DraggablePropsDocComponent, DroppableEventsDocComponent, DroppablePropsDocComponent],
    exports: [AppDocModule]
})
export class DragDropDocModule {}
