import { Component } from '@angular/core';
import { EventsDocComponent } from '../../doc/inplace/eventsdoc';
import { ImageDocComponent } from '../../doc/inplace/imagedoc';
import { PropsDocComponent } from '../../doc/inplace/propsdoc';
import { StyleDocComponent } from '../../doc/inplace/styledoc';
import { BasicDocComponent } from '../../doc/inplace/basicdoc';
import { DataDocComponent } from '../../doc/inplace/datadoc';
import { ImportDocComponent } from '../../doc/inplace/importdoc';
import { InputDocComponent } from '../../doc/inplace/inputdoc';
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
            component: BasicDocComponent
        },
        {
            id: 'input',
            label: 'Input',
            component: InputDocComponent
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDocComponent
        },
        {
            id: 'data',
            label: 'Data',
            component: DataDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        },
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
