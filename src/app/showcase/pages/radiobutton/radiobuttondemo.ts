import { Component } from '@angular/core';
import { DisabledDocComponent } from '../../doc/radiobutton/disableddoc';
import { DynamicDocComponent } from '../../doc/radiobutton/dynamicdoc';
import { EventsDocComponent } from '../../doc/radiobutton/eventsdoc';
import { GroupDocComponent } from '../../doc/radiobutton/groupdoc';
import { ImportDocComponent } from '../../doc/radiobutton/importdoc';
import { InvalidDocComponent } from '../../doc/radiobutton/invaliddoc';
import { MethodsDocComponent } from '../../doc/radiobutton/methodsdoc';
import { PropsDocComponent } from '../../doc/radiobutton/propsdoc';
import { StyleDocComponent } from '../../doc/radiobutton/styledoc';

@Component({
    templateUrl: './radiobuttondemo.html'
})
export class RadioButtonDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDocComponent
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDocComponent
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDocComponent
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDocComponent
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
        },
        {
            id: 'methods',
            label: 'Methods',
            component: MethodsDocComponent
        }
    ];
}
