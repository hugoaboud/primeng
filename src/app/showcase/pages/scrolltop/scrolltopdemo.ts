import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/scrolltop/importdoc';
import { BasicDocComponent } from '../../doc/scrolltop/basicdoc';
import { PropsDocComponent } from '../../doc/scrolltop/propsdoc';
import { StyleDocComponent } from '../../doc/scrolltop/styledoc';
import { ElementDocComponent } from '../../doc/scrolltop/elementdoc';

@Component({
    templateUrl: './scrolltopdemo.html',
    styleUrls: ['./scrolltopdemo.scss']
})
export class ScrollTopDemo {
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
            id: 'element',
            label: 'Target Element',
            component: ElementDocComponent
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
            id: 'api',
            label: 'API',
            doc: [{ name: 'ScrollTop', pathname: '/modules/scrolltop.html' }]
        }
    ];
}
