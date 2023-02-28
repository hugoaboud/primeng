import { Component } from '@angular/core';
import { SidebarBasicDemo } from '../../doc/sidebar/basicdoc';
import { SidebarTemplateDemo } from '../../doc/sidebar/templatedoc';
import { EventsDocComponent } from '../../doc/sidebar/eventsdoc';
import { ImportDocComponent } from '../../doc/sidebar/importdoc';
import { PropsDocComponent } from '../../doc/sidebar/propsdoc';
import { StyleDocComponent } from '../../doc/sidebar/styledoc';
import { TemplatesDocComponent } from '../../doc/sidebar/templatesdoc';
import { SidebarPositionDemo } from '../../doc/sidebar/positiondoc';
import { SidebarFullScreenDemo } from '../../doc/sidebar/fullscreendoc';
import { SidebarSizeDemo } from '../../doc/sidebar/sizedoc';

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
            component: SidebarBasicDemo
        },
        {
            id: 'position',
            label: 'Position',
            component: SidebarPositionDemo
        },
        {
            id: 'fullscreen',
            label: 'Full Screen',
            component: SidebarFullScreenDemo
        },
        {
            id: 'size',
            label: 'Size',
            component: SidebarSizeDemo
        },
        {
            id: 'template',
            label: 'Template',
            component: SidebarTemplateDemo
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
