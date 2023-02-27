import { Component } from '@angular/core';
import { DisabledDocComponent } from '../../doc/tabview/disableddoc';
import { BasicDocComponent } from '../../doc/tabview/basicdoc';
import { ControlledDocComponent } from '../../doc/tabview/controlleddoc';
import { ImportDocComponent } from '../../doc/tabview/importdoc';
import { CustomTemplateDocComponent } from '../../doc/tabview/customtemplatedoc';
import { ClosableDocComponent } from '../../doc/tabview/closabledoc';
import { ScrollableDocComponent } from '../../doc/tabview/scrollabledoc';
import { StyleDocComponent } from '../../doc/tabview/styledoc';
import { PropsDocComponent } from '../../doc/tabview/propsdoc';
import { EventsDocComponent } from '../../doc/tabview/eventsdoc';
import { TemplatesDocComponent } from '../../doc/tabview/templatesdoc';

@Component({
    templateUrl: './tabviewdemo.html',
    styleUrls: ['./tabviewdemo.scss']
})
export class TabViewDemo {
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
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDocComponent
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDocComponent
        },
        {
            id: 'customtemplate',
            label: 'Custom Template',
            component: CustomTemplateDocComponent
        },
        {
            id: 'closable',
            label: 'Closable',
            component: ClosableDocComponent
        },
        {
            id: 'scrollable',
            label: 'Scrollable',
            component: ScrollableDocComponent
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
