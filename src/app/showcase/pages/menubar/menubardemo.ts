import { Component } from '@angular/core';
import { CustomDocComponent } from '../../doc/menubar/customdoc';
import { BasicDocComponent } from '../../doc/menubar/basicdoc';
import { ImportDocComponent } from '../../doc/menubar/importdoc';
import { MenuItemDocComponent } from '../../doc/menubar/menuitemdoc';
import { PropsDocComponent } from '../../doc/menubar/propsdoc';
import { StyleDocComponent } from '../../doc/menubar/styledoc';
import { TemplatesDocComponent } from '../../doc/menubar/templatesdoc';
@Component({
    templateUrl: './menubardemo.html'
})
export class MenubarDemo {
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
            id: 'custom',
            label: 'Custom Content',
            component: CustomDocComponent
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
            id: 'menuitem',
            label: 'MenuItem API',
            component: MenuItemDocComponent
        }
    ];
}
