import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/fieldset/importdoc';
import { FieldsetBasicDemo } from '../../doc/fieldset/basicdoc';
import { FieldsetToggleableDemo } from '../../doc/fieldset/toggleabledoc';
import { FieldsetTemplateDemo } from '../../doc/fieldset/templatedoc';
import { StyleDocComponent } from '../../doc/fieldset/styledoc';
import { PropsDocComponent } from '../../doc/fieldset/propsdoc';
import { EventsDocComponent } from '../../doc/fieldset/eventsdoc';
import { TemplatesDocComponent } from '../../doc/fieldset/templatesdoc';

@Component({
    templateUrl: './fieldsetdemo.html'
})
export class FieldsetDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: FieldsetBasicDemo
        },
        {
            id: 'toggleable',
            label: 'Toggleable',
            component: FieldsetToggleableDemo
        },
        {
            id: 'template',
            label: 'Template',
            component: FieldsetTemplateDemo
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
