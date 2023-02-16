import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/contextmenu/basicdoc';
import { DocumentDocComponent } from '../../doc/contextmenu/documentdoc';
import { EventsDocComponent } from '../../doc/contextmenu/eventsdoc';
import { ImportDocComponent } from '../../doc/contextmenu/importdoc';
import { MenuItemDocComponent } from '../../doc/contextmenu/menuitemdoc';
import { MethodsDocComponent } from '../../doc/contextmenu/methodsdoc';
import { PropsDocComponent } from '../../doc/contextmenu/propsdoc';
import { StyleDocComponent } from '../../doc/contextmenu/styledoc';
import { TriggerEventDocComponent } from '../../doc/contextmenu/triggereventdoc';

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
            component: BasicDocComponent
        },
        {
            id: 'document',
            label: 'Document',
            component: DocumentDocComponent
        },
        {
            id: 'triggerevent',
            label: 'Trigger Event',
            component: TriggerEventDocComponent
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
