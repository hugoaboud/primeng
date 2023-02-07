import { Component } from '@angular/core';
import { IconDocComponent } from '../../doc/tag/icondoc';
import { ImportDocComponent } from '../../doc/tag/importdoc';
import { SeverityDocComponent } from '../../doc/tag/severitydoc';
import { BasicDocComponent } from '../../doc/tag/basicdoc';
import { PropsDocComponent } from '../../doc/tag/propsdoc';
import { StyleDocComponent } from '../../doc/tag/styledoc';
import { PillDocComponent } from '../../doc/tag/pilldoc';
import { TemplateDocComponent } from '../../doc/tag/templatedoc';

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
            component: BasicDocComponent
        },
        {
            id: 'severity',
            label: 'Severity',
            component: SeverityDocComponent
        },
        {
            id: 'pill',
            label: 'Pill',
            component: PillDocComponent
        },
        {
            id: 'icon',
            label: 'Icon',
            component: IconDocComponent
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
        },
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
