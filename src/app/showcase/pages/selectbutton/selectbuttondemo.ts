import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/selectbutton/basicdoc';
import { DisabledDocComponent } from '../../doc/selectbutton/disableddoc';
import { EventsDocComponent } from '../../doc/selectbutton/eventsdoc';
import { ImportDocComponent } from '../../doc/selectbutton/importdoc';
import { InvalidDocComponent } from '../../doc/selectbutton/invaliddoc';
import { MultipleDocComponent } from '../../doc/selectbutton/multipledoc';
import { PropsDocComponent } from '../../doc/selectbutton/propsdoc';
import { TemplateDocComponent } from '../../doc/selectbutton/templatedoc';

@Component({
    templateUrl: './selectbuttondemo.html'
})
export class SelectButtonDemo {
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
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDocComponent
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDocComponent
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
