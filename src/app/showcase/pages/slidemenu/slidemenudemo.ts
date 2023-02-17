import { Component } from '@angular/core';
import { PopupDocComponent } from '../../doc/slidemenu/popupdoc';
import { BasicDocComponent } from '../../doc/slidemenu/basicdoc';
import { ImportDocComponent } from '../../doc/slidemenu/importdoc';
import { MenuItemDocComponent } from '../../doc/slidemenu/menuitemdoc';
import { MethodsDocComponent } from '../../doc/slidemenu/methodsdoc';
import { PropsDocComponent } from '../../doc/slidemenu/propsdoc';
import { StyleDocComponent } from '../../doc/slidemenu/styledoc';

@Component({
    templateUrl: './slidemenudemo.html'
})
export class SlideMenuDemo {
    
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
            id: 'menuitem',
            label: 'MenuItem API',
            component: MenuItemDocComponent
        }
    ];
}
