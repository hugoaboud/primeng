import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/steps/basicdoc';
import { ImportDocComponent } from '../../doc/steps/importdoc';
import { InteractiveDocComponent } from '../../doc/steps/interactivedoc';
import { MenuItemDocComponent } from '../../doc/steps/menuitemdoc';
import { MethodsDocComponent } from '../../doc/steps/methodsdoc';
import { PropsDocComponent } from '../../doc/steps/propsdoc';
import { StyleDocComponent } from '../../doc/steps/styledoc';
import { EventsDocComponent } from '../../doc/steps/eventsdoc';

@Component({
    templateUrl: './stepsdemo.html',
    styleUrls: ['stepsdemo.scss']
})
export class StepsDemo {
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
            id: 'interactive',
            label: 'Interactive',
            component: InteractiveDocComponent
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
