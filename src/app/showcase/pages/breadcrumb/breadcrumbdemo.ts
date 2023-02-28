import { Component } from '@angular/core';
import { StyleDocComponent } from '../../doc/breadcrumb/styledoc';
import { BreadcrumbBasicDemo } from '../../doc/breadcrumb/basicdoc';
import { EventsDocComponent } from '../../doc/breadcrumb/eventsdoc';
import { ImportDocComponent } from '../../doc/breadcrumb/importdoc';
import { MenuItemDocComponent } from '../../doc/breadcrumb/menuitemdoc';
import { PropsDocComponent } from '../../doc/breadcrumb/propsdoc';

@Component({
    templateUrl: './breadcrumbdemo.html'
})
export class BreadcrumbDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            basic: 'basic',
            label: 'Basic',
            component: BreadcrumbBasicDemo
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
            id: 'methods',
            label: 'Methods',
            component: EventsDocComponent
        },
        {
            id: 'menuitem',
            label: 'MenuItem API',
            component: MenuItemDocComponent
        }
    ];
}
