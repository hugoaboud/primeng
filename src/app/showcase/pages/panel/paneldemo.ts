import { Component } from '@angular/core';
import { TemplateDocComponent } from '../../doc/panel/templatedoc';
import { BasicDocComponent } from '../../doc/panel/basicdoc';
import { ImportDocComponent } from '../../doc/panel/importdoc';
import { ToggleableDocComponent } from '../../doc/panel/toggleabledoc';
import { StyleDocComponent } from '../../doc/panel/styledoc';
import { PropsDocComponent } from '../../doc/panel/propsdoc';
import { EventsDocComponent } from '../../doc/panel/eventsdoc';
import { TemplatesDocComponent } from '../../doc/panel/templatesdoc';

@Component({
    templateUrl: './paneldemo.html'
})
export class PanelDemo {
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
            id: 'toggleable',
            label: 'Toggleable',
            component: ToggleableDocComponent
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDocComponent
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
