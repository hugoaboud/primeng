import { Component } from '@angular/core';
import { ProgressBarBasicDemo } from '../../doc/progressbar/basicdoc';
import { StyleDocComponent } from '../../doc/progressbar/styledoc';
import { ImportDocComponent } from '../../doc/progressbar/importdoc';
import { ProgressBarIndeterminateDemo } from '../../doc/progressbar/indeterminatedoc';
import { ProgressBarDynamicDemo } from '../../doc/progressbar/dynamicdoc';
import { PropsDocComponent } from '../../doc/progressbar/propsdoc';

@Component({
    templateUrl: './progressbardemo.html'
})
export class ProgressBarDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: ProgressBarBasicDemo
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: ProgressBarDynamicDemo
        },
        {
            id: 'indeterminate',
            label: 'Indeterminate',
            component: ProgressBarIndeterminateDemo
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
            id: 'api',
            label: 'API',
            doc: [{ name: 'ProgressBar', pathname: '/modules/progressbar.html' }]
        }
    ];
}
