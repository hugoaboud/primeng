import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/sidebar/basicdoc';
import { CustomDocComponent } from '../../doc/sidebar/customdoc';
import { EventsDocComponent } from '../../doc/sidebar/eventsdoc';
import { ImportDocComponent } from '../../doc/sidebar/importdoc';
import { PropsDocComponent } from '../../doc/sidebar/propsdoc';
import { StyleDocComponent } from '../../doc/sidebar/styledoc';
import { TemplatesDocComponent } from '../../doc/sidebar/templatesdoc';
import { PositionDocComponent } from '../../doc/sidebar/positiondoc';
import { FullScreenDocComponent } from '../../doc/sidebar/fullscreendoc';
import { SizeDocComponent } from '../../doc/sidebar/sizedoc';

@Component({
    templateUrl: './sidebardemo.html'
})
export class SidebarDemo {
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
            id: 'position',
            label: 'Position',
            component: PositionDocComponent
        },
        {
            id: 'fullscreen',
            label: 'Full Screen',
            component: FullScreenDocComponent
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDocComponent
        },
        {
            id: 'custom',
            label: 'Custom Content',
            component: CustomDocComponent
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
        }
    ];
}
