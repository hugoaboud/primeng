import { Component } from '@angular/core';
import { TabViewDisabledDemo } from '../../doc/tabview/disableddoc';
import { TabViewBasicDemo } from '../../doc/tabview/basicdoc';
import { TabViewControlledDemo } from '../../doc/tabview/controlleddoc';
import { ImportDocComponent } from '../../doc/tabview/importdoc';
import { TabViewTemplateDemo } from '../../doc/tabview/customtemplatedoc';
import { TabViewClosableDemo } from '../../doc/tabview/closabledoc';
import { ScrollableDocComponent } from '../../doc/tabview/scrollabledoc';
import { StyleDocComponent } from '../../doc/tabview/styledoc';
import { PropsDocComponent } from '../../doc/tabview/propsdoc';
import { EventsDocComponent } from '../../doc/tabview/eventsdoc';
import { TemplatesDocComponent } from '../../doc/tabview/templatesdoc';

@Component({
    templateUrl: './tabviewdemo.html',
    styleUrls: ['./tabviewdemo.scss']
})
export class TabViewDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: TabViewBasicDemo
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: TabViewControlledDemo
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: TabViewDisabledDemo
        },
        {
            id: 'template',
            label: 'Template',
            component: TabViewTemplateDemo
        },
        {
            id: 'closable',
            label: 'Closable',
            component: TabViewClosableDemo
        },
        {
            id: 'scrollable',
            label: 'Scrollable',
            component: ScrollableDocComponent
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
