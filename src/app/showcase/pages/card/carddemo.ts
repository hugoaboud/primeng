import { Component } from '@angular/core';
import { CardAdvancedDemo } from '../../doc/card/advanceddoc';
import { CardBasicDemo } from '../../doc/card/basicdoc';
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
            component: CardBasicDemo
        },
        {
            id: 'advanced',
            label: 'Advanced',
            component: CardAdvancedDemo
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
