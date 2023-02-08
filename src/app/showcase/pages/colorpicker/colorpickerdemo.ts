import { Component } from '@angular/core';
import { InlineDocComponent } from '../../doc/colorpicker/inlinedoc';
import { BasicDocComponent } from '../../doc/colorpicker/basicdoc';
import { ImportDocComponent } from '../../doc/colorpicker/importdoc';
import { FormatDocComponent } from '../../doc/colorpicker/formatdoc';
import { DisabledDocComponent } from '../../doc/colorpicker/disableddoc';
import { PropsDocComponent } from '../../doc/colorpicker/propsdoc';
import { StyleDocComponent } from '../../doc/colorpicker/styledoc';
import { EventsDocComponent } from '../../doc/colorpicker/eventsdoc';

@Component({
    templateUrl: './colorpickerdemo.html'
})
export class ColorPickerDemo {
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
            id: 'inline',
            label: 'Inline',
            component: InlineDocComponent
        },
        {
            id: 'format',
            label: 'Format',
            component: FormatDocComponent
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDocComponent
        },
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDocComponent
        }
    ];
}
