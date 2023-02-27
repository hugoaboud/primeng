import { Component, ViewEncapsulation } from '@angular/core';
import { BasicDocComponent } from '../../doc/scrollpanel/basicdoc';
import { ImportDocComponent } from '../../doc/scrollpanel/importdoc';
import { CustomDocComponent } from '../../doc/scrollpanel/customdoc';
import { StyleDocComponent } from '../../doc/scrollpanel/styledoc';
import { PropsDocComponent } from '../../doc/scrollpanel/propsdoc';
import { MethodsDocComponent } from '../../doc/scrollpanel/methodsdoc';
import { TemplatesDocComponent } from '../../doc/scrollpanel/templatesdoc';

@Component({
    templateUrl: './scrollpaneldemo.html',
    styleUrls: ['./scrollpaneldemo.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ScrollPanelDemo {
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
            id: 'custom',
            label: 'Custom',
            component: CustomDocComponent
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
