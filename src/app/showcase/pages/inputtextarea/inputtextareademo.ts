import { Component } from '@angular/core';
import { AutoResizeDocComponent } from '../../doc/inputtextarea/autoresizedoc';
import { BasicDocComponent } from '../../doc/inputtextarea/basicdoc';
import { DisabledDocComponent } from '../../doc/inputtextarea/disableddoc';
import { EventsDocComponent } from '../../doc/inputtextarea/eventsdoc';
import { FloatlabelDocComponent } from '../../doc/inputtextarea/floatlabeldoc';
import { ImportDocComponent } from '../../doc/inputtextarea/importdoc';
import { KeyfilterDocComponent } from '../../doc/inputtextarea/keyfilterdoc';
import { PropsDocComponent } from '../../doc/inputtextarea/propsdoc';
import { StyleDocComponent } from '../../doc/inputtextarea/styledoc';

@Component({
    templateUrl: './inputtextareademo.html'
})
export class InputTextareaDemo {
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
            id: 'autoresize',
            label: 'AutoResize',
            component: AutoResizeDocComponent
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyfilterDocComponent
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatlabelDocComponent
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
            id: 'api',
            label: 'API',
            doc: [{ name: 'InputTextArea', pathname: '/modules/inputtextarea.html' }]
        }
    ];
}
