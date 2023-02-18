import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/overlaypanel/basicdoc';
import { ImportDocComponent } from '../../doc/overlaypanel/importdoc';
import { PropsDocComponent } from '../../doc/overlaypanel/propsdoc';
import { StyleDocComponent } from '../../doc/overlaypanel/styledoc';
import { TemplatesDocComponent } from '../../doc/overlaypanel/templatesdoc';
import { DataTableDocComponent } from '../../doc/overlaypanel/datatabledoc';
import { CustomDocComponent } from '../../doc/overlaypanel/customdoc';
import { TargetDocComponent } from '../../doc/overlaypanel/targetdoc';
import { EventsDocComponent } from '../../doc/overlaypanel/eventsdoc';
import { MethodsDocComponent } from '../../doc/overlaypanel/methodsdoc';

@Component({
    templateUrl: './overlaypaneldemo.html'
})
export class OverlayPanelDemo {
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
            id: 'target',
            label: 'Target',
            component: TargetDocComponent
        },
        {
            id: 'custom',
            label: 'Custom Content',
            component: CustomDocComponent
        },
        {
            id: 'datatable',
            label: 'DataTable',
            component: DataTableDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'props',
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
        }
    ];
}