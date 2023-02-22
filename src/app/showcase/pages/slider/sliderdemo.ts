import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/slider/basicdoc';
import { EventsDocComponent } from '../../doc/slider/eventsdoc';
import { ImportDocComponent } from '../../doc/slider/importdoc';
import { InputDocComponent } from '../../doc/slider/inputdoc';
import { PropsDocComponent } from '../../doc/slider/propsdoc';
import { RangeDocComponent } from '../../doc/slider/rangedoc';
import { StepDocComponent } from '../../doc/slider/stepdoc';
import { StyleDocComponent } from '../../doc/slider/styledoc';
import { VerticalDocComponent } from '../../doc/slider/verticaldoc';

@Component({
    templateUrl: './sliderdemo.html',
    styleUrls: ['./sliderdemo.scss']
})
export class SliderDemo {
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
            id: 'step',
            label: 'Step',
            component: StepDocComponent
        },
        {
            id: 'range',
            label: 'Range',
            component: RangeDocComponent
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDocComponent
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
