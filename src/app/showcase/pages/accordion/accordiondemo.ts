import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BasicDocComponent } from '../../doc/accordion/basicdoc';
import { ControlledDocComponent } from '../../doc/accordion/controlleddoc';
import { DisabledDocComponent } from '../../doc/accordion/disableddoc';
import { EventsDocComponent } from '../../doc/accordion/eventsdoc';
import { ImportDocComponent } from '../../doc/accordion/importdoc';
import { MultipleDocComponent } from '../../doc/accordion/multipledoc';
import { PropsDocComponent } from '../../doc/accordion/propsdoc';
import { StyleDocComponent } from '../../doc/accordion/styledoc';
import { TemplateDocComponent } from '../../doc/accordion/templatedoc';
import { TemplatesDocComponent } from '../../doc/accordion/templatesdoc';

@Component({
    templateUrl: './accordiondemo.html',
    providers: [MessageService],
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
            component: BasicDocComponent
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDocComponent
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDocComponent
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDocComponent
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
