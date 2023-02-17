import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/tieredmenu/basicdoc';
import { EventsDocComponent } from '../../doc/tieredmenu/eventsdoc';
import { ImportDocComponent } from '../../doc/tieredmenu/importdoc';
import { MenuItemDocComponent } from '../../doc/tieredmenu/menuitemdoc';
import { PopupDocComponent } from '../../doc/tieredmenu/popupdoc';
import { PropsDocComponent } from '../../doc/tieredmenu/propsdoc';
import { StyleDocComponent } from '../../doc/tieredmenu/styledoc';
import { MethodsDocComponent } from '../../doc/tieredmenu/methodsdoc';

@Component({
    templateUrl: './tieredmenudemo.html'
})
export class TieredMenuDemo {
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
            id: 'popup',
            label: 'Popup',
            component: PopupDocComponent
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
