import { Component } from '@angular/core';
import { OverlayPanelBasicDemo } from '../../doc/overlaypanel/basicdoc';
import { ImportDocComponent } from '../../doc/overlaypanel/importdoc';
import { PropsDocComponent } from '../../doc/overlaypanel/propsdoc';
import { StyleDocComponent } from '../../doc/overlaypanel/styledoc';
import { TemplatesDocComponent } from '../../doc/overlaypanel/templatesdoc';
import { OverlayPanelDataTableDemo } from '../../doc/overlaypanel/datatabledoc';
import { OverlayPanelTemplateDemo } from '../../doc/overlaypanel/templatedoc';
import { OverlayPanelTargetDemo } from '../../doc/overlaypanel/targetdoc';
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
            component: OverlayPanelBasicDemo
        },
        {
            id: 'target',
            label: 'Target',
            component: OverlayPanelTargetDemo
        },
        {
            id: 'template',
            label: 'Template',
            component: OverlayPanelTemplateDemo
        },
        {
            id: 'datatable',
            label: 'DataTable',
            component: OverlayPanelDataTableDemo
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
