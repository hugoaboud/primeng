import { Component } from '@angular/core';
import { AccordionBasicDemo } from '../../doc/accordion/basicdoc';
import { AccordionControlledDemo } from '../../doc/accordion/controlleddoc';
import { AccordionDisabledDemo } from '../../doc/accordion/disableddoc';
import { EventsDocComponent } from '../../doc/accordion/eventsdoc';
import { ImportDocComponent } from '../../doc/accordion/importdoc';
import { AccordionMultipleDemo } from '../../doc/accordion/multipledoc';
import { PropsDocComponent } from '../../doc/accordion/propsdoc';
import { StyleDocComponent } from '../../doc/accordion/styledoc';
import { AccordionTemplateDemo } from '../../doc/accordion/templatedoc';
import { TemplatesDocComponent } from '../../doc/accordion/templatesdoc';

@Component({
    templateUrl: './accordiondemo.html',
    styleUrls: ['./accordiondemo.scss']
})
export class AccordionDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: AccordionBasicDemo
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: AccordionMultipleDemo
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: AccordionDisabledDemo
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: AccordionControlledDemo
        },
        {
            id: 'template',
            label: 'Template',
            component: AccordionTemplateDemo
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
