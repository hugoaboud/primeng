import { Component } from '@angular/core';
import { PanelTemplateDemo } from '../../doc/panel/templatedoc';
import { PanelBasicDemo } from '../../doc/panel/basicdoc';
import { ImportDocComponent } from '../../doc/panel/importdoc';
import { PanelToggleableDemo } from '../../doc/panel/toggleabledoc';
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
            component: PanelBasicDemo
        },
        {
            id: 'toggleable',
            label: 'Toggleable',
            component: PanelToggleableDemo
        },
        {
            id: 'template',
            label: 'Template',
            component: PanelTemplateDemo
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
