import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/tristatecheckbox/basicdoc';
import { ImportDocComponent } from '../../doc/tristatecheckbox/importdoc';
import { DisabledDocComponent } from '../../doc/tristatecheckbox/disableddoc';
import { PropsDocComponent } from '../../doc/tristatecheckbox/propsdoc';
import { EventsDocComponent } from '../../doc/tristatecheckbox/eventsdoc';
import { StyleDocComponent } from '../../doc/tristatecheckbox/styledoc';

@Component({
    templateUrl: './tristatecheckboxdemo.html'
})
export class TriStateCheckboxDemo {
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
