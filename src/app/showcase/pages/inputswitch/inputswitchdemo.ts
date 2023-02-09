import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/inputswitch/basicdoc';
import { ImportDocComponent } from '../../doc/inputswitch/importdoc';
import { DisabledDocComponent } from '../../doc/inputswitch/disableddoc';
import { PreselectionDocComponent } from '../../doc/inputswitch/preselectiondoc';
import { PropsDocComponent } from '../../doc/inputswitch/propsdoc';
import { EventsDocComponent } from '../../doc/inputswitch/eventsdoc';
import { StyleDocComponent } from '../../doc/inputswitch/styledoc';

@Component({
    templateUrl: './inputswitchdemo.html'
})
export class InputSwitchDemo {
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
            id: 'preselection',
            label: 'Preselection',
            component: PreselectionDocComponent
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
        }
    ];
}
