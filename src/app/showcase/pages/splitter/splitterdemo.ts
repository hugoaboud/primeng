import { Component } from '@angular/core';
import { SizeDocComponent } from '../../doc/splitter/sizedoc';
import { HorizontalDocComponent } from '../../doc/splitter/horizontaldoc';
import { ImportDocComponent } from '../../doc/splitter/importdoc';
import { VerticalDocComponent } from '../../doc/splitter/verticaldoc';
import { NestedDocComponent } from '../../doc/splitter/nesteddoc';
import { StyleDocComponent } from '../../doc/splitter/styledoc';
import { PropsDocComponent } from '../../doc/splitter/propsdoc';
import { EventsDocComponent } from '../../doc/splitter/eventsdoc';
import { TemplatesDocComponent } from '../../doc/splitter/templatesdoc';

@Component({
    templateUrl: './splitterdemo.html'
})
export class SplitterDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDocComponent
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDocComponent
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDocComponent
        },
        {
            id: 'nested',
            label: 'Nested',
            component: NestedDocComponent
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
            id: 'templates',
            label: 'Templates',
            component: TemplatesDocComponent
        }
    ];
}
