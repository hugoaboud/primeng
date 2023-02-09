import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/autocomplete/basicdoc';
import { EventsDocComponent } from '../../doc/autocomplete/eventsdoc';
import { GroupedDocComponent } from '../../doc/autocomplete/groupeddoc';
import { ImportDocComponent } from '../../doc/autocomplete/importdoc';
import { MultipleDocComponent } from '../../doc/autocomplete/multipledoc';
import { PropsDocComponent } from '../../doc/autocomplete/propsdoc';
import { StyleDocComponent } from '../../doc/autocomplete/styledoc';
import { TemplateDocComponent } from '../../doc/autocomplete/templatedoc';
import { VirtualScrollDocComponent } from '../../doc/autocomplete/virtualscrolldoc';
@Component({
    templateUrl: './autocompletedemo.html'
})
export class AutoCompleteDemo {
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
            id: 'grouped',
            label: 'Grouped',
            component: GroupedDocComponent
        },
        {
            id: 'virtualscroll',
            label: 'Virtual Scroll',
            component: VirtualScrollDocComponent
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDocComponent
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
            doc: [{ name: 'AutoComplete', pathname: '/modules/autocomplete.html' }]
        }
    ];
}
