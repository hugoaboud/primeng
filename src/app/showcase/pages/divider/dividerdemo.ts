import { Component } from '@angular/core';
import { DividerBasicDemo } from '../../doc/divider/basicdoc';
import { DividerContentDemo } from '../../doc/divider/contentdoc';
import { ImportDocComponent } from '../../doc/divider/importdoc';
import { DividerLoginDemo } from '../../doc/divider/logindoc';
import { PropsDocComponent } from '../../doc/divider/propsdoc';
import { StyleDocComponent } from '../../doc/divider/styledoc';
import { DividerTypeDemo } from '../../doc/divider/typedoc';
import { DividerVerticalDemo } from '../../doc/divider/verticaldoc';

@Component({
    templateUrl: './dividerdemo.html'
})
export class DividerDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: DividerBasicDemo
        },
        {
            id: 'type',
            label: 'Type',
            component: DividerTypeDemo
        },
        {
            id: 'content',
            label: 'Content',
            component: DividerContentDemo
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: DividerVerticalDemo
        },
        {
            id: 'login',
            label: 'Login',
            component: DividerLoginDemo
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
