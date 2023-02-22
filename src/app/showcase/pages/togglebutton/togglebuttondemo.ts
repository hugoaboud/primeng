import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/togglebutton/basicdoc';
import { CustomizedDocComponent } from '../../doc/togglebutton/customizeddoc';
import { EventsDocComponent } from '../../doc/togglebutton/eventsdoc';
import { ImportDocComponent } from '../../doc/togglebutton/importdoc';
import { PropsDocComponent } from '../../doc/togglebutton/propsdoc';
import { StyleDocComponent } from '../../doc/togglebutton/styledoc';

@Component({
    templateUrl: './togglebuttondemo.html'
})
export class ToggleButtonDemo {
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
            id: 'customized',
            label: 'Customized',
            component: CustomizedDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDocComponent
        }
    ];
}
