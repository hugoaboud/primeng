import { Component } from '@angular/core';
import { CircleDocComponent } from '../../doc/speeddial/circledoc';
import { CustomDocComponent } from '../../doc/speeddial/customdoc';
import { EventsDocComponent } from '../../doc/speeddial/eventsdoc';
import { ImportDocComponent } from '../../doc/speeddial/importdoc';
import { LinearDocComponent } from '../../doc/speeddial/lineardoc';
import { MaskDocComponent } from '../../doc/speeddial/maskdoc';
import { PropsDocComponent } from '../../doc/speeddial/propsdoc';
import { QuarterCircleDocComponent } from '../../doc/speeddial/quartercircledoc';
import { SemiCircleDocComponent } from '../../doc/speeddial/semicircledoc';
import { StyleDocComponent } from '../../doc/speeddial/styledoc';
import { TemplatesDocComponent } from '../../doc/speeddial/templatesdoc';
import { TooltipDocComponent } from '../../doc/speeddial/tooltipdoc';

@Component({
    templateUrl: './speeddialdemo.html',
    styleUrls: ['./speeddialdemo.scss']
})
export class SpeedDialDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'linear',
            label: 'Linear',
            component: LinearDocComponent
        },
        {
            id: 'circle',
            label: 'Circle',
            component: CircleDocComponent
        },
        {
            id: 'semicircle',
            label: 'Semi Circle',
            component: SemiCircleDocComponent
        },
        {
            id: 'quartercircle',
            label: 'Quarter Circle',
            component: QuarterCircleDocComponent
        },
        {
            id: 'tooltip',
            label: 'Tooltip',
            component: TooltipDocComponent
        },
        {
            id: 'mask',
            label: 'Mask',
            component: MaskDocComponent
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
            id: 'templates',
            label: 'Templates',
            component: TemplatesDocComponent
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDocComponent
        }
    ];
}
