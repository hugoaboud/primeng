import { Component } from '@angular/core';
import { TabMenuControlledDemo } from '../../doc/tabmenu/controlleddoc';
import { TabMenuActiveDemo } from '../../doc/tabmenu/activedoc';
import { TabMenuBasicDemo } from '../../doc/tabmenu/basicdoc';
import { EventsDocComponent } from '../../doc/tabmenu/eventsdoc';
import { ImportDocComponent } from '../../doc/tabmenu/importdoc';
import { MenuItemDocComponent } from '../../doc/tabmenu/menuitemdoc';
import { PropsDocComponent } from '../../doc/tabmenu/propsdoc';
import { StyleDocComponent } from '../../doc/tabmenu/styledoc';
import { TabMenuScrollableDemo } from '../../doc/tabmenu/scrollabledoc';
import { TabMenuTemplateDemo } from '../../doc/tabmenu/templatedoc';
import { TemplatesDocComponent } from '../../doc/tabmenu/templatesdoc';

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
            component: TabMenuBasicDemo
        },
        {
            id: 'active',
            label: 'Active Item',
            component: TabMenuActiveDemo
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: TabMenuControlledDemo
        },
        {
            id: 'scrollable',
            label: 'Scrollable',
            component: TabMenuScrollableDemo
        },
        {
            id: 'template',
            label: 'Template',
            component: TabMenuTemplateDemo
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
            id: 'templates',
            label: 'Templates',
            component: TemplatesDocComponent
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
