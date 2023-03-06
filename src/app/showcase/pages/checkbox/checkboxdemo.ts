import { Component } from '@angular/core';
import { LabelDocComponent } from '../../doc/checkbox/labeldoc';
import { BasicDocComponent } from '../../doc/checkbox/basicdoc';
import { ImportDocComponent } from '../../doc/checkbox/importdoc';
import { MultipleDocComponent } from '../../doc/checkbox/multipledoc';
import { DynamicDocComponent } from '../../doc/checkbox/dynamicdoc';
import { DisabledDocComponent } from '../../doc/checkbox/disableddoc';
import { StyleDocComponent } from '../../doc/checkbox/styledoc';
import { PropsDocComponent } from '../../doc/checkbox/propsdoc';

@Component({
    templateUrl: './checkboxdemo.html'
})
export class CheckboxDemo {
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
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDocComponent
        },
        {
            id: 'label',
            label: 'Label',
            component: LabelDocComponent
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDocComponent
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDocComponent
        }
    ];
}
