import { Component } from '@angular/core';
import { ControlledDocComponent } from '../../doc/tabmenu/controlleddoc';
import { ActiveDocComponent } from '../../doc/tabmenu/activedoc';
import { BasicDocComponent } from '../../doc/tabmenu/basicdoc';
import { EventsDocComponent } from '../../doc/tabmenu/eventsdoc';
import { ImportDocComponent } from '../../doc/tabmenu/importdoc';
import { MenuItemDocComponent } from '../../doc/tabmenu/menuitemdoc';
import { PropsDocComponent } from '../../doc/tabmenu/propsdoc';
import { StyleDocComponent } from '../../doc/tabmenu/styledoc';
import { ScrollableDocComponent } from '../../doc/tabmenu/scrollabledoc';

@Component({
    templateUrl: './tabmenudemo.html'
})
export class TabMenuDemo {
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
            id: 'active',
            label: 'Active Item',
            component: ActiveDocComponent
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDocComponent
        },
        {
            id: 'scrollable',
            label: 'Scrollable',
            component: ScrollableDocComponent
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
