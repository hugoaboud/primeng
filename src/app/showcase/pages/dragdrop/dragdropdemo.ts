import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/dragdrop/importdoc';
import { BasicDocComponent } from '../../doc/dragdrop/basicdoc';
import { DataTableDocComponent } from '../../doc/dragdrop/datatabledoc';
import { DropIndicatorDocComponent } from '../../doc/dragdrop/dropindicatordoc';
import { DragHandleDocComponent } from '../../doc/dragdrop/draghandledoc';
import { DraggablePropsDocComponent } from '../../doc/dragdrop/draggablepropsdoc';
import { DraggableEventsDocComponent } from '../../doc/dragdrop/draggableeventsdoc';
import { DroppablePropsDocComponent } from '../../doc/dragdrop/droppablepropsdoc';
import { DroppableEventsDocComponent } from '../../doc/dragdrop/droppableeventsdoc';

@Component({
    templateUrl: './dragdropdemo.html',
    styleUrls: ['./dragdropdemo.scss']
})
export class DragDropDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDocComponent
        },
        {
            id: 'datatable',
            label: 'DataTable',
            component: DataTableDocComponent
        },
        {
            id: 'dropindicator',
            label: 'Drop Indicator',
            component: DropIndicatorDocComponent
        },
        {
            id: 'draghandle',
            label: 'Drag Handle',
            component: DragHandleDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'draggableprops',
            label: 'Properties of Draggable',
            component: DraggablePropsDocComponent
        },
        {
            id: 'draggableevents',
            label: 'Events of Draggable',
            component: DraggableEventsDocComponent
        },
        {
            id: 'droppableprops',
            label: 'Properties of Droppable',
            component: DroppablePropsDocComponent
        },
        {
            id: 'droppableevents',
            label: 'Events of Droppable',
            component: DroppableEventsDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'DragDrop', pathname: '/modules/dragdrop.html' }]
        }
    ];
}
