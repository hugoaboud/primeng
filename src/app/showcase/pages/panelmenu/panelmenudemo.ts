import { Component } from '@angular/core';
import { PanelMenuBasicDemo } from '../../doc/panelmenu/basicdoc';
import { ImportDocComponent } from '../../doc/panelmenu/importdoc';
import { MenuItemDocComponent } from '../../doc/panelmenu/menuitemdoc';
import { PropsDocComponent } from '../../doc/panelmenu/propsdoc';
import { StyleDocComponent } from '../../doc/panelmenu/styledoc';
import { PanelMenuMultipleDemo } from '../../doc/panelmenu/multipledoc';

@Component({
    templateUrl: './panelmenudemo.html'
})
export class PanelMenuDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: PanelMenuBasicDemo
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: PanelMenuMultipleDemo
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
            id: 'menuitem',
            label: 'MenuItem API',
            component: MenuItemDocComponent
        }
    ];
}
