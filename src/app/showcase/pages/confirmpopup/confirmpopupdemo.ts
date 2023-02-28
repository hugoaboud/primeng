import { Component } from '@angular/core';
import { ConfirmPopupBasicDemo } from '../../doc/confirmpopup/basicdoc';
import { ImportDocComponent } from '../../doc/confirmpopup/importdoc';
import { PropsDocComponent } from '../../doc/confirmpopup/propsdoc';
import { StyleDocComponent } from '../../doc/confirmpopup/styledoc';
import { ServiceDocComponent } from '../../doc/confirmpopup/servicedoc';
import { ConfirmationApiDocComponent } from '../../doc/confirmpopup/confirmationapidoc';

@Component({
    templateUrl: './confirmpopupdemo.html'
})
export class ConfirmPopupDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: ConfirmPopupBasicDemo
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
            id: 'service',
            label: 'Confirmation Service',
            component: ServiceDocComponent
        },
        {
            id: 'confirmationapi',
            label: 'Confirmation API',
            component: ConfirmationApiDocComponent
        }
    ];
}
