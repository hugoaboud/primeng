import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/divider/basicdoc';
import { ContentDocComponent } from '../../doc/divider/contentdoc';
import { ImportDocComponent } from '../../doc/divider/importdoc';
import { LoginDocComponent } from '../../doc/divider/logindoc';
import { PropsDocComponent } from '../../doc/divider/propsdoc';
import { StyleDocComponent } from '../../doc/divider/styledoc';
import { TypeDocComponent } from '../../doc/divider/typedoc';
import { VerticalDocComponent } from '../../doc/divider/verticaldoc';

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
            component: BasicDocComponent
        },
        {
            id: 'type',
            label: 'Type',
            component: TypeDocComponent
        },
        {
            id: 'content',
            label: 'Content',
            component: ContentDocComponent
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDocComponent
        },
        {
            id: 'login',
            label: 'Login',
            component: LoginDocComponent
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
