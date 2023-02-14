import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/knob/basicdoc';
import { ColorDocComponent } from '../../doc/knob/colordoc';
import { DisabledDocComponent } from '../../doc/knob/disableddoc';
import { EventsDocComponent } from '../../doc/knob/eventsdoc';
import { ImportDocComponent } from '../../doc/knob/importdoc';
import { MinMaxDocComponent } from '../../doc/knob/minmaxdoc';
import { PropsDocComponent } from '../../doc/knob/propsdoc';
import { ReadonlyDocComponent } from '../../doc/knob/readonlydoc';
import { SizeDocComponent } from '../../doc/knob/sizedoc';
import { StepDocComponent } from '../../doc/knob/stepdoc';
import { StrokeDocComponent } from '../../doc/knob/strokedoc';
import { StyleDocComponent } from '../../doc/knob/styledoc';
import { TemplateDocComponent } from '../../doc/knob/templatedoc';

@Component({
    templateUrl: './knobdemo.html'
})
export class KnobDemo {
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
            id: 'minmax',
            label: 'Min/Max',
            component: MinMaxDocComponent
        },
        {
            id: 'step',
            label: 'Step',
            component: StepDocComponent
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDocComponent
        },
        {
            id: 'stroke',
            label: 'Stroke',
            component: StrokeDocComponent
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDocComponent
        },
        {
            id: 'color',
            label: 'Color',
            component: ColorDocComponent
        },
        {
            id: 'readonly',
            label: 'ReadOnly',
            component: ReadonlyDocComponent
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDocComponent
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
