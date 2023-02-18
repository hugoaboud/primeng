import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/tooltip/basicdoc';
import { ImportDocComponent } from '../../doc/tooltip/importdoc';
import { PropsDocComponent } from '../../doc/tooltip/propsdoc';
import { StyleDocComponent } from '../../doc/tooltip/styledoc';
import { PositionDocComponent } from '../../doc/tooltip/positiondoc';
import { EventDocComponent } from '../../doc/tooltip/eventdoc';
import { AutoHideDocComponent } from '../../doc/tooltip/autohidedoc';
import { DelayDocComponent } from '../../doc/tooltip/delaydoc';
import { OptionsDocComponent } from '../../doc/tooltip/optionsdoc';

@Component({
    templateUrl: './tooltipdemo.html'
})
export class TooltipDemo {
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
            id: 'position',
            label: 'Position',
            component: PositionDocComponent
        },
        {
            id: 'event',
            label: 'Events',
            component: EventDocComponent
        },
        {
            id: 'autohide',
            label: 'Auto Hide',
            component: AutoHideDocComponent
        },
        {
            id: 'delay',
            label: 'Delay',
            component: DelayDocComponent
        },
        {
            id: 'options',
            label: 'Tooltip Options',
            component: OptionsDocComponent
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
        }
    ];
}
