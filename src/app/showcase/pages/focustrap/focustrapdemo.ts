import { Component } from '@angular/core';
import { PropsDocComponent } from '../../doc/focustrap/propsdoc';
import { FocusTrapBasicDemo } from '../../doc/focustrap/basicdoc';
import { ImportDocComponent } from '../../doc/focustrap/importdoc';

@Component({
    templateUrl: './focustrapdemo.html'
})
export class FocusTrapDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: FocusTrapBasicDemo
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
