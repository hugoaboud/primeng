import { Component } from '@angular/core';
import { ContextMenuBasicDemo } from '../../doc/contextmenu/basicdoc';
import { ContextMenuDocumentDemo } from '../../doc/contextmenu/documentdoc';
import { EventsDocComponent } from '../../doc/contextmenu/eventsdoc';
import { ImportDocComponent } from '../../doc/contextmenu/importdoc';
import { MenuItemDocComponent } from '../../doc/contextmenu/menuitemdoc';
import { MethodsDocComponent } from '../../doc/contextmenu/methodsdoc';
import { PropsDocComponent } from '../../doc/contextmenu/propsdoc';
import { StyleDocComponent } from '../../doc/contextmenu/styledoc';
import { ContextMenuTriggerEventDemo } from '../../doc/contextmenu/triggereventdoc';

@Component({
    templateUrl: './contextmenudemo.html'
})
export class ContextMenuDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: ContextMenuBasicDemo
        },
        {
            id: 'document',
            label: 'Document',
            component: ContextMenuDocumentDemo
        },
        {
            id: 'triggerevent',
            label: 'Trigger Event',
            component: ContextMenuTriggerEventDemo
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'props',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'methods',
            label: 'Methods',
            component: MethodsDocComponent
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDocComponent
        },
        {
            id: 'menuitem',
            label: 'MenuItem API',
            component: MenuItemDocComponent
        }
    ];
}
