import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/dialog/basicdoc';
import { EventsDocComponent } from '../../doc/dialog/eventsdoc';
import { ImportDocComponent } from '../../doc/dialog/importdoc';
import { LongContentDocComponent } from '../../doc/dialog/longcontentdoc';
import { PropsDocComponent } from '../../doc/dialog/propsdoc';
import { StyleDocComponent } from '../../doc/dialog/styledoc';
import { ResponsiveDocComponent } from '../../doc/dialog/responsivedoc';
import { PositionDocComponent } from '../../doc/dialog/positiondoc';
import { MaximizableDocComponent } from '../../doc/dialog/maximizabledoc';
import { CustomDocComponent } from '../../doc/dialog/customdoc';
import { OverlaysInsideDocComponent } from '../../doc/dialog/overlaysinsidedoc';

@Component({
    templateUrl: './dialogdemo.html'
})
export class DialogDemo {
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
            id: 'longcontent',
            label: 'Long Content',
            component: LongContentDocComponent
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDocComponent
        },
        {
            id: 'position',
            label: 'Position',
            component: PositionDocComponent
        },
        {
            id: 'maximizable',
            label: 'Maximizable',
            component: MaximizableDocComponent
        },
        {
            id: 'custom',
            label: 'Custom Content',
            component: CustomDocComponent
        },
        {
            id: 'overlaysinside',
            label: 'Overlays Inside',
            component: OverlaysInsideDocComponent
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

    // displayModal: boolean;

    // displayBasic: boolean;

    // displayBasic2: boolean;

    // displayMaximizable: boolean;

    // displayResponsive: boolean;

    // displayPosition: boolean;

    // position: string;

    // showModalDialog() {
    //     this.displayModal = true;
    // }

    // showBasicDialog() {
    //     this.displayBasic = true;
    // }

    // showBasicDialog2() {
    //     this.displayBasic2 = true;
    // }

    // showMaximizableDialog() {
    //     this.displayMaximizable = true;
    // }

    // showPositionDialog(position: string) {
    //     this.position = position;
    //     this.displayPosition = true;
    // }

    // showResponsiveDialog() {
    //     this.displayResponsive = true;
    // }
}
