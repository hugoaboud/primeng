import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/password/basicdoc';
import { DisabledDocComponent } from '../../doc/password/disableddoc';
import { EventsDocComponent } from '../../doc/password/eventsdoc';
import { FloatLabelDocComponent } from '../../doc/password/floatlabeldoc';
import { ImportDocComponent } from '../../doc/password/importdoc';
import { InvalidDocComponent } from '../../doc/password/invaliddoc';
import { MeterDocComponent } from '../../doc/password/meterdoc';
import { PropsDocComponent } from '../../doc/password/propsdoc';
import { StyleDocComponent } from '../../doc/password/styledoc';
import { TemplateDocComponent } from '../../doc/password/templatedoc';
import { TemplatesDocComponent } from '../../doc/password/templatesdoc';
import { TogglemaskDocComponent } from '../../doc/password/togglemaskdoc';

@Component({
    templateUrl: './passworddemo.html'
})
export class PasswordDemo {
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
            id: 'meter',
            label: 'Meter',
            component: MeterDocComponent
        },
        {
            id: 'togglemask',
            label: 'Toggle Mask',
            component: TogglemaskDocComponent
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDocComponent
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDocComponent
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
            id: 'templates',
            label: 'Templates',
            component: TemplatesDocComponent
        }
    ];
}
