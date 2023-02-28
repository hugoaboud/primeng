import { Component } from '@angular/core';
import { StyleDocComponent } from '../../doc/toolbar/styledoc';
import { ImportDocComponent } from '../../doc/toolbar/importdoc';
import { PropsDocComponent } from '../../doc/toolbar/propsdoc';
import { TemplatesDocComponent } from '../../doc/toolbar/templatesdoc';
import { ToolbarBasicDemo } from '../../doc/toolbar/basicdoc';

@Component({
    templateUrl: './toolbardemo.html'
})
export class ToolbarDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: ToolbarBasicDemo
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
            id: 'templates',
            label: 'Templates',
            component: TemplatesDocComponent
        }
    ];
}
