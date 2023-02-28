import { Component } from '@angular/core';
import { SplitterSizeDemo } from '../../doc/splitter/sizedoc';
import { SplitterHorizontalDemo } from '../../doc/splitter/horizontaldoc';
import { ImportDocComponent } from '../../doc/splitter/importdoc';
import { SplitterVerticalDemo } from '../../doc/splitter/verticaldoc';
import { SplitterNestedDemo } from '../../doc/splitter/nesteddoc';
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
            component: SplitterHorizontalDemo
        },
        {
            id: 'size',
            label: 'Size',
            component: SplitterSizeDemo
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: SplitterVerticalDemo
        },
        {
            id: 'nested',
            label: 'Nested',
            component: SplitterNestedDemo
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
