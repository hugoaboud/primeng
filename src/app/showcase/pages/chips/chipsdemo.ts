import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/chips/importdoc';
import { BasicDocComponent } from '../../doc/chips/basicdoc';
import { CommaSeperatorDocComponent } from '../../doc/chips/commaseperator.doc';
import { RegexpSeperatorDocComponent } from '../../doc/chips/regexpseperator.doc';
import { TemplateDocComponent } from '../../doc/chips/templatedoc';
import { StyleDocComponent } from '../../doc/chips/styledoc';
import { PropsDocComponent } from '../../doc/chips/propsdoc';

@Component({
    templateUrl: './chipsdemo.html'
})
export class ChipsDemo {
    values1: string[];

    values2: string[];

    values3: string[];

    values4: string[];

    separatorExp: RegExp = /,| /;

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
            id: 'commaseperator',
            label: 'Comma Seperator',
            component: CommaSeperatorDocComponent
        },
        {
            id: 'regexpseperator',
            label: 'RegExp Seperator',
            component: RegexpSeperatorDocComponent
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDocComponent
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
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Chips', pathname: '/modules/chips.html' }]
        }
    ];
}
