import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/toast/importdoc';
import { ToastBasicDemo } from '../../doc/toast/basicdoc';
import { ToastSeverityDemo } from '../../doc/toast/severitydoc';
import { ToastAnimationDemo } from '../../doc/toast/animationdoc';
import { EventsDocComponent } from '../../doc/toast/eventsdoc';
import { InterfaceDocComponent } from '../../doc/toast/interfacedoc';
import { ToastMultipleDemo } from '../../doc/toast/multipledoc';
import { ToastPositionDemo } from '../../doc/toast/positiondoc';
import { PropsDocComponent } from '../../doc/toast/propsdoc';
import { ToastResponsiveDemo } from '../../doc/toast/responsivedoc';
import { ToastStickyDemo } from '../../doc/toast/stickydoc';
import { StyleDocComponent } from '../../doc/toast/styledoc';
import { ToastTargetDemo } from '../../doc/toast/targetdoc';
import { ToastTemplateDemo } from '../../doc/toast/templatedoc';
import { TemplatesDocComponent } from '../../doc/toast/templatesdoc';
import { ToastClearDemo } from '../../doc/toast/cleardoc';

@Component({
    templateUrl: './toastdemo.html'
})
export class ToastDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: ToastBasicDemo
        },
        {
            id: 'severity',
            label: 'Severity',
            component: ToastSeverityDemo
        },
        {
            id: 'position',
            label: 'Position',
            component: ToastPositionDemo
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: ToastMultipleDemo
        },
        {
            id: 'target',
            label: 'Target',
            component: ToastTargetDemo
        },
        {
            id: 'sticky',
            label: 'Sticky',
            component: ToastStickyDemo
        },
        {
            id: 'clear',
            label: 'Clearing Messages',
            component: ToastClearDemo
        },
        {
            id: 'templating',
            label: 'Templating',
            component: ToastTemplateDemo
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ToastResponsiveDemo
        },
        {
            id: 'animation',
            label: 'Animation',
            component: ToastAnimationDemo
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'interface',
            label: 'Message Interface',
            component: InterfaceDocComponent
        },
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
