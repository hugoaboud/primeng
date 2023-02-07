import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/cascadeselect/basicdoc';
import { EventsDocComponent } from '../../doc/cascadeselect/eventsdoc';
import { ImportDocComponent } from '../../doc/cascadeselect/importdoc';
import { PropsDocComponent } from '../../doc/cascadeselect/propsdoc';
import { StyleDocComponent } from '../../doc/cascadeselect/styledoc';
import { TemplateDocComponent } from '../../doc/cascadeselect/templatedoc';

@Component({
    templateUrl: './cascadeselectdemo.html'
})
export class CascadeSelectDemo {
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
            id: 'template',
            label: 'Template',
            component: TemplateDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        },
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
            doc: [{ name: 'CascadeSelect', pathname: '/modules/cascadeselect.html' }]
        }
    ];
}
