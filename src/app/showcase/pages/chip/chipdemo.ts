import { Component } from '@angular/core';
import { IconDocComponent } from '../../doc/chip/icondoc';
import { ImageDocComponent } from '../../doc/chip/imagedoc';
import { ImportDocComponent } from '../../doc/chip/importdoc';
import { TemplatingDocComponent } from '../../doc/chip/templatingdoc';
import { BasicDocComponent } from '../../doc/chip/basicdoc';
import { StyleDocComponent } from '../../doc/chip/styledoc';
import { PropsDocComponent } from '../../doc/chip/propsdoc';
import { EventsDocComponent } from '../../doc/chip/eventsdoc';

@Component({
    templateUrl: './chipdemo.html',
    styleUrls: ['chipdemo.scss']
})
export class ChipDemo {
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
            id: 'icon',
            label: 'Icon',
            component: IconDocComponent
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDocComponent
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplatingDocComponent
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
            id: 'api',
            label: 'API',
            doc: [{ name: 'Chip', pathname: '/modules/chip.html' }]
        }
    ];
}
