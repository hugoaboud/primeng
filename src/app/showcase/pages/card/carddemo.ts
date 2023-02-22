import { Component } from '@angular/core';
import { AdvancedDocComponent } from '../../doc/card/advanceddoc';
import { BasicDocComponent } from '../../doc/card/basicdoc';
import { ImportDocComponent } from '../../doc/card/importdoc';
import { PropsDocComponent } from '../../doc/card/propsdoc';
import { StyleDocComponent } from '../../doc/card/styledoc';
import { TemplatesDocComponent } from '../../doc/card/templatesdoc';

@Component({
    templateUrl: './carddemo.html'
})
export class CardDemo {
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
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDocComponent
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
