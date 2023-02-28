import { Component } from '@angular/core';
import { MenuBasicDemo } from '../../doc/menu/basicdoc';
import { MenuCustomContentDemo } from '../../doc/menu/customdoc';
import { MenuCommandDemo } from '../../doc/menu/commanddoc';
import { EventsDocComponent } from '../../doc/menu/eventsdoc';
import { MethodsDocComponent } from '../../doc/menu/methodsdoc';
import { MenuGroupDemo } from '../../doc/menu/groupdoc';
import { ImportDocComponent } from '../../doc/menu/importdoc';
import { MenuItemDocComponent } from '../../doc/menu/menuitemdoc';
import { MenuNavigationDemo } from '../../doc/menu/navigationdoc';
import { MenuPopupDemo } from '../../doc/menu/popupdoc';
import { PropsDocComponent } from '../../doc/menu/propsdoc';
import { StyleDocComponent } from '../../doc/menu/styledoc';

@Component({
    templateUrl: './menudemo.html'
})
export class MenuDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: MenuBasicDemo
        },
        {
            id: 'group',
            label: 'Group',
            component: MenuGroupDemo
        },
        {
            id: 'popup',
            label: 'Popup',
            component: MenuPopupDemo
        },
        {
            id: 'custom',
            label: 'Custom Content',
            component: MenuCustomContentDemo
        },
        {
            id: 'navigation',
            label: 'Navigation',
            component: MenuNavigationDemo
        },
        {
            id: 'command',
            label: 'Command',
            component: MenuCommandDemo
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
