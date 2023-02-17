import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/confirmdialog/basicdoc';
import { EventsDocComponent } from '../../doc/confirmdialog/eventsdoc';
import { ImportDocComponent } from '../../doc/confirmdialog/importdoc';
import { PropsDocComponent } from '../../doc/confirmdialog/propsdoc';
import { StyleDocComponent } from '../../doc/confirmdialog/styledoc';
import { PositionDocComponent } from '../../doc/confirmdialog/positiondoc';
import { CustomDocComponent } from '../../doc/confirmdialog/customdoc';

@Component({
    templateUrl: './confirmdialogdemo.html'
})
export class ConfirmDialogDemo {
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
            id: 'custom',
            label: 'Custom Content',
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
            id: 'props',
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