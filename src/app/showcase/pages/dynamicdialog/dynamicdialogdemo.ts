import { Component } from '@angular/core';
import { OpenDocComponent } from '../../doc/dynamicdialog/opendoc';
import { ImportDocComponent } from '../../doc/dynamicdialog/importdoc';
import { PropsDocComponent } from '../../doc/dynamicdialog/propsdoc';
import { StyleDocComponent } from '../../doc/dynamicdialog/styledoc';
import { DynamicDialogBasicDemo } from '../../doc/dynamicdialog/basicdoc';
import { UsageDocComponent } from '../../doc/dynamicdialog/usagedoc';
import { PassingDataDocComponent } from '../../doc/dynamicdialog/passingdatadoc';
import { CloseDocComponent } from '../../doc/dynamicdialog/closedoc';
import { ProductListDemoDoc } from '../../doc/dynamicdialog/productlistdemodoc';
import { EventsDocComponent } from '../../doc/dynamicdialog/eventsdoc';

@Component({
    templateUrl: './dynamicdialogdemo.html'
})
export class DynamicDialogDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: DynamicDialogBasicDemo
        },
        {
            id: 'usage',
            label: 'Usage',
            component: UsageDocComponent
        },
        {
            id: 'open',
            label: 'Opening a Dialog',
            component: OpenDocComponent
        },
        {
            id: 'passingdata',
            label: 'Passing Data',
            component: PassingDataDocComponent
        },
        {
            id: 'close',
            label: 'Closing a Dialog',
            component: CloseDocComponent
        },
        {
            id: 'productlistdemo',
            label: 'ProductListDemo',
            component: ProductListDemoDoc
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
