import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/menu/basicdoc';
import { CustomDocComponent } from '../../doc/menu/customdoc';
import { CommandDocComponent } from '../../doc/menu/commanddoc';
import { EventsDocComponent } from '../../doc/menu/eventsdoc';
import { MethodsDocComponent } from '../../doc/menu/methodsdoc';
import { GroupDocComponent } from '../../doc/menu/groupdoc';
import { ImportDocComponent } from '../../doc/menu/importdoc';
import { MenuItemDocComponent } from '../../doc/menu/menuitemdoc';
import { NavigationDocComponent } from '../../doc/menu/navigationdoc';
import { PopupDocComponent } from '../../doc/menu/popupdoc';
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
            component: BasicDocComponent
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDocComponent
        },
        {
            id: 'popup',
            label: 'Popup',
            component: PopupDocComponent
        },
        {
            id: 'custom',
            label: 'Custom Content',
            component: CustomDocComponent
        },
        {
            id: 'navigation',
            label: 'Navigation',
            component: NavigationDocComponent
        },
        {
            id: 'command',
            label: 'Command',
            component: CommandDocComponent
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
