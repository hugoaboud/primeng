import { Component } from '@angular/core';
import { ChipIconDemo } from '../../doc/chip/icondoc';
import { ChipImageDemo } from '../../doc/chip/imagedoc';
import { ImportDocComponent } from '../../doc/chip/importdoc';
import { ChipTemplatingDemo } from '../../doc/chip/templatingdoc';
import { ChipBasicDemo } from '../../doc/chip/basicdoc';
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
            component: ChipBasicDemo
        },
        {
            id: 'icon',
            label: 'Icon',
            component: ChipIconDemo
        },
        {
            id: 'image',
            label: 'Image',
            component: ChipImageDemo
        },
        {
            id: 'custom',
            label: 'Custom Content',
            component: ChipTemplatingDemo
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
        }
    ];
}
