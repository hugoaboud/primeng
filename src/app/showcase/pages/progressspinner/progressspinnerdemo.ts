import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/avatar/importdoc';
import { ProgressSpinnerBasicDemo } from '../../doc/progressspinner/basicdoc';
import { StyleDocComponent } from '../../doc/progressspinner/styledoc';
import { ProgressSpinnerTemplateDemo } from '../../doc/progressspinner/templatedoc';
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
            component: ProgressSpinnerBasicDemo
        },
        {
            id: 'templating',
            label: 'Template',
            component: ProgressSpinnerTemplateDemo
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
