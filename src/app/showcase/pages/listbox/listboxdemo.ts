import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/listbox/basicdoc';
import { DisabledDocComponent } from '../../doc/listbox/disableddoc';
import { EventsDocComponent } from '../../doc/listbox/eventsdoc';
import { FilterDocComponent } from '../../doc/listbox/filterdoc';
import { GroupDocComponent } from '../../doc/listbox/groupdoc';
import { ImportDocComponent } from '../../doc/listbox/importdoc';
import { InvalidDocComponent } from '../../doc/listbox/invaliddoc';
import { MultipleDocComponent } from '../../doc/listbox/multipledoc';
import { PropsDocComponent } from '../../doc/listbox/propsdoc';
import { StyleDocComponent } from '../../doc/listbox/styledoc';
import { TemplateDocComponent } from '../../doc/listbox/templatedoc';
import { TemplatesDocComponent } from '../../doc/listbox/templatesdoc';
@Component({
    templateUrl: './listboxdemo.html'
})
export class ListboxDemo {
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
            id: 'template',
            label: 'Template',
            component: TemplateDocComponent
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDocComponent
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDocComponent
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
