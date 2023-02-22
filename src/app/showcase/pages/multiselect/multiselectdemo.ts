import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/multiselect/basicdoc';
import { ChipsDocComponent } from '../../doc/multiselect/chipsdoc';
import { DisabledDocComponent } from '../../doc/multiselect/disableddoc';
import { EventsDocComponent } from '../../doc/multiselect/eventsdoc';
import { FilterDocComponent } from '../../doc/multiselect/filterdoc';
import { FloatLabelDocComponent } from '../../doc/multiselect/floatlabeldoc';
import { GroupDocComponent } from '../../doc/multiselect/groupdoc';
import { ImportDocComponent } from '../../doc/multiselect/importdoc';
import { InvalidDocComponent } from '../../doc/multiselect/invaliddoc';
import { PropsDocComponent } from '../../doc/multiselect/propsdoc';
import { StyleDocComponent } from '../../doc/multiselect/styledoc';
import { TemplateDocComponent } from '../../doc/multiselect/templatedoc';
import { TemplatesDocComponent } from '../../doc/multiselect/templatesdoc';
import { VirtualScrollDocComponent } from '../../doc/multiselect/virtualscrolldoc';

@Component({
    templateUrl: './multiselectdemo.html',
    styleUrls: ['./multiselectdemo.scss']
})
export class MultiSelectDemo {
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
            id: 'chips',
            label: 'Chips',
            component: ChipsDocComponent
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDocComponent
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDocComponent
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDocComponent
        },
        {
            id: 'virtualscroll',
            label: 'VirtualScroll',
            component: VirtualScrollDocComponent
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
