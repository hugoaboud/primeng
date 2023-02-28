import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/megamenu/importdoc';
import { MegaMenuBasicDemo } from '../../doc/megamenu/basicdoc';
import { EventsDocComponent } from '../../doc/megamenu/eventsdoc';
import { MegaMenuItemDocComponent } from '../../doc/megamenu/megamenuitemdoc';
import { PropsDocComponent } from '../../doc/megamenu/propsdoc';
import { StyleDocComponent } from '../../doc/megamenu/styledoc';
import { MegaMenuTemplateDemo } from '../../doc/megamenu/templatedoc';
import { TemplatesDocComponent } from '../../doc/megamenu/templatesdoc';
import { MegaMenuVerticalDemo } from '../../doc/megamenu/verticaldoc';

@Component({
    templateUrl: './megamenudemo.html'
})
export class MegaMenuDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: MegaMenuBasicDemo
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: MegaMenuVerticalDemo
        },
        {
            id: 'template',
            label: 'Template',
            component: MegaMenuTemplateDemo
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
            id: 'events',
            label: 'Events',
            component: EventsDocComponent
        },
        {
            id: 'templates',
            label: 'Templates',
            component: TemplatesDocComponent
        },
        {
            id: 'megamenuitem',
            label: 'MegaMenuItem API',
            component: MegaMenuItemDocComponent
        }
    ];
}
