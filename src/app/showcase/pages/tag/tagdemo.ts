import { Component } from '@angular/core';
import { TagIconDemo } from '../../doc/tag/icondoc';
import { ImportDocComponent } from '../../doc/tag/importdoc';
import { TagSeverityDemo } from '../../doc/tag/severitydoc';
import { TagBasicDDemo } from '../../doc/tag/basicdoc';
import { PropsDocComponent } from '../../doc/tag/propsdoc';
import { StyleDocComponent } from '../../doc/tag/styledoc';
import { TagPillDemo } from '../../doc/tag/pilldoc';
import { TagTemplateDemo } from '../../doc/tag/templatedoc';

@Component({
    templateUrl: './tagdemo.html'
})
export class TagDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: TagBasicDDemo
        },
        {
            id: 'severity',
            label: 'Severity',
            component: TagSeverityDemo
        },
        {
            id: 'pill',
            label: 'Pill',
            component: TagPillDemo
        },
        {
            id: 'icon',
            label: 'Icon',
            component: TagIconDemo
        },
        {
            id: 'template',
            label: 'Template',
            component: TagTemplateDemo
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
            doc: [{ name: 'Tag', pathname: '/modules/tag.html' }]
        }
    ];
}
