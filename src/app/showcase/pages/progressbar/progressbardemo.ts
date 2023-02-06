import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/progressbar/basicdoc';
import { StyleDocComponent } from '../../doc/progressbar/styledoc';
import { ImportDocComponent } from '../../doc/progressbar/importdoc';
import { IndeterminateDocComponent } from '../../doc/progressbar/indeterminatedoc';
import { DynamicDocComponent } from '../../doc/progressbar/dynamicdoc';
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
            component: BasicDocComponent
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDocComponent
        },
        {
            id: 'indeterminate',
            label: 'Indeterminate',
            component: IndeterminateDocComponent
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
            doc: [{ name: 'ProgressBar', pathname: '/modules/progressbar.html' }]
        }
    ];
}
