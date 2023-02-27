import { Component } from '@angular/core';
import { EventsDocComponent } from '../../doc/Image/eventsdoc';
import { ImportDocComponent } from '../../doc/Image/importdoc';
import { PropsDocComponent } from '../../doc/Image/propsdoc';
import { StyleDocComponent } from '../../doc/Image/styledoc';
import { TemplatesDocComponent } from '../../doc/Image/templatesdoc';
import { ImageBasicDemo } from '../../doc/Image/basicdoc';
import { ImageIndicatorTemplateDemo } from '../../doc/Image/indicatortemplatedoc';

@Component({
    templateUrl: './imagedemo.html'
})
export class ImageDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: ImageBasicDemo
        },
        {
            id: 'templates',
            label: 'Indicator Template',
            component: ImageIndicatorTemplateDemo
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
            id: 'templates',
            label: 'Templates',
            component: TemplatesDocComponent
        }
    ];
}
