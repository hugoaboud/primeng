import { Component } from '@angular/core';
import { TemplateDocComponent } from '../../doc/timeline/templatedoc';
import { AlignmentDocComponent } from '../../doc/timeline/alignmentdoc';
import { BasicDocComponent } from '../../doc/timeline/basicdoc';
import { ImportDocComponent } from '../../doc/timeline/importdoc';
import { OppositeDocComponent } from '../../doc/timeline/oppositedoc';
import { HorizontalDocComponent } from '../../doc/timeline/horizontaldoc';
import { StyleDocComponent } from '../../doc/timeline/styledoc';
import { PropsDocComponent } from '../../doc/timeline/propsdoc';
import { TemplatesDocComponent } from '../../doc/timeline/templatesdoc';

@Component({
    templateUrl: './timelinedemo.html'
})
export class TimelineDemo {
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
            id: 'alignment',
            label: 'Alignment',
            component: AlignmentDocComponent
        },
        {
            id: 'opposite',
            label: 'Opposite',
            component: OppositeDocComponent
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDocComponent
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDocComponent
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
            id: 'templates',
            label: 'Templates',
            component: TemplatesDocComponent
        }
    ];
}
