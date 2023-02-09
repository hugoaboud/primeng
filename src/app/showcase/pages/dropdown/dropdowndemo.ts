import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/dropdown/basicdoc';
import { DisabledDocComponent } from '../../doc/dropdown/disableddoc';
import { EditableDocComponent } from '../../doc/dropdown/editabledoc';
import { FilterDocComponent } from '../../doc/dropdown/filterdoc';
import { GroupDocComponent } from '../../doc/dropdown/groupdoc';
import { ImportDocComponent } from '../../doc/dropdown/importdoc';
import { TemplateDocComponent } from '../../doc/dropdown/templatedoc';
import { VirtualScrollDocComponent } from '../../doc/dropdown/virtualscrolldoc';
import { FloatLabelDocComponent } from '../../doc/dropdown/floatlabeldoc';
import { PropsDocComponent } from '../../doc/dropdown/propsdoc';
import { StyleDocComponent } from '../../doc/dropdown/styledoc';
import { EventsDocComponent } from '../../doc/dropdown/eventsdoc';
import { MethodsDocComponent } from '../../doc/dropdown/methodsdoc';
import { TemplatesDocComponent } from '../../doc/dropdown/templatesdoc';

@Component({
    templateUrl: './dropdowndemo.html',
    styleUrls: ['./dropdowndemo.scss']
})
export class DropdownDemo {
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
            id: 'editable',
            label: 'Editable',
            component: EditableDocComponent
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
            label: 'Virtual Scroll',
            component: VirtualScrollDocComponent
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDocComponent
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDocComponent
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
            id: 'methods',
            label: 'Methods',
            component: MethodsDocComponent
        },
        {
            id: 'templates',
            label: 'Templates',
            component: TemplatesDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Dropdown', pathname: '/modules/dropdown.html' }]
        }
    ];
}
