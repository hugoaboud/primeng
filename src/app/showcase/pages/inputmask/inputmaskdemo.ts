import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/inputmask/basicdoc';
import { DisabledDocComponent } from '../../doc/inputmask/disableddoc';
import { EventsDocComponent } from '../../doc/inputmask/eventsdoc';
import { FloatlabelDocComponent } from '../../doc/inputmask/floatlabeldoc';
import { ImportDocComponent } from '../../doc/inputmask/importdoc';
import { InvalidDocComponent } from '../../doc/inputmask/invaliddoc';
import { MaskDocComponent } from '../../doc/inputmask/maskdoc';
import { MethodsDocComponent } from '../../doc/inputmask/methodsdoc';
import { OptionalDocComponent } from '../../doc/inputmask/optionaldoc';
import { PropsDocComponent } from '../../doc/inputmask/propsdoc';
import { SlotCharDocComponent } from '../../doc/inputmask/slotchardoc';
import { StyleDocComponent } from '../../doc/inputmask/styledoc';

@Component({
    templateUrl: './inputmaskdemo.html'
})
export class InputMaskDemo {
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
            id: 'mask',
            label: 'Mask',
            component: MaskDocComponent
        },
        {
            id: 'slotchar',
            label: 'Slot Char',
            component: SlotCharDocComponent
        },
        {
            id: 'optional',
            label: 'Optional',
            component: OptionalDocComponent
        },
        {
            id: 'floatlabel',
            label: 'FloatLabel',
            component: FloatlabelDocComponent
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDocComponent
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDocComponent
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
            id: 'methods',
            label: 'Methods',
            component: MethodsDocComponent
        }
    ];
}
