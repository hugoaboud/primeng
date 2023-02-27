import { Component } from '@angular/core';
import { EventsDocComponent } from '../../doc/inplace/eventsdoc';
import { InplaceImageDemo } from '../../doc/inplace/imagedoc';
import { PropsDocComponent } from '../../doc/inplace/propsdoc';
import { StyleDocComponent } from '../../doc/inplace/styledoc';
import { InplaceBasicDemo } from '../../doc/inplace/basicdoc';
import { InplaceDataDemo } from '../../doc/inplace/datadoc';
import { ImportDocComponent } from '../../doc/inplace/importdoc';
import { InplaceInputDemo } from '../../doc/inplace/inputdoc';
import { MethodsDocComponent } from '../../doc/inplace/methodsdoc';

@Component({
    templateUrl: './inplacedemo.html'
})
export class InplaceDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: InplaceBasicDemo
        },
        {
            id: 'input',
            label: 'Input',
            component: InplaceInputDemo
        },
        {
            id: 'image',
            label: 'Image',
            component: InplaceImageDemo
        },
        {
            id: 'data',
            label: 'Data',
            component: InplaceDataDemo
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
            id: 'api',
            label: 'API',
            doc: [{ name: 'Inplace', pathname: '/modules/inplace.html' }]
        }
    ];
}
