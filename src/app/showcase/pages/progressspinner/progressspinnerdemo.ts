import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/avatar/importdoc';
import { BasicDocComponent } from '../../doc/progressspinner/basicdoc';
import { StyleDocComponent } from '../../doc/progressspinner/styledoc';
import { CustomDocComponent } from '../../doc/progressspinner/customdoc';
import { PropsDocComponent } from '../../doc/progressspinner/propsdoc';

@Component({
    templateUrl: './progressspinnerdemo.html',
    styleUrls: ['./progressspinnerdemo.css']
})
export class ProgressSpinnerDemo {
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
            id: 'custom',
            label: 'Custom',
            component: CustomDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        },
        {
            id: 'props',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'ProgressSpinner', pathname: '/modules/progressspinner.html' }]
        }
    ];
}
