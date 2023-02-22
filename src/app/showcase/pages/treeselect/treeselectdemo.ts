import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/treeselect/basicdoc';
import { CheckboxDocComponent } from '../../doc/treeselect/checkboxdoc';
import { DisabledDocComponent } from '../../doc/treeselect/disableddoc';
import { EventsDocComponent } from '../../doc/treeselect/eventsdoc';
import { FilterDocComponent } from '../../doc/treeselect/filterdoc';
import { FloatLabelDocComponent } from '../../doc/treeselect/floatlabeldoc';
import { ImportDocComponent } from '../../doc/treeselect/importdoc';
import { InvalidDocComponent } from '../../doc/treeselect/invaliddoc';
import { MultipleDocComponent } from '../../doc/treeselect/multipledoc';
import { PropsDocComponent } from '../../doc/treeselect/propsdoc';
import { StyleDocComponent } from '../../doc/treeselect/styledoc';
import { TemplatesDocComponent } from '../../doc/treeselect/templatesdoc';

@Component({
    templateUrl: './treeselectdemo.html'
})
export class TreeSelectDemo {
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
            id: 'checkbox',
            label: 'Checkbox',
            component: CheckboxDocComponent
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDocComponent
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDocComponent
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
