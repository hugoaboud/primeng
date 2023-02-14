import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ImportDocComponent } from '../../doc/toast/importdoc';
import { BasicDocComponent } from '../../doc/toast/basicdoc';
import { SeverityDocComponent } from '../../doc/toast/severitydoc';
import { AnimationDocComponent } from '../../doc/toast/animationdoc';
import { EventsDocComponent } from '../../doc/toast/eventsdoc';
import { InterfaceDocComponent } from '../../doc/toast/interfacedoc';
import { MultipleDocComponent } from '../../doc/toast/multipledoc';
import { PositionDocComponent } from '../../doc/toast/positiondoc';
import { PropsDocComponent } from '../../doc/toast/propsdoc';
import { ResponsiveDocComponent } from '../../doc/toast/responsivedoc';
import { StickyDocComponent } from '../../doc/toast/stickydoc';
import { StyleDocComponent } from '../../doc/toast/styledoc';
import { TargetDocComponent } from '../../doc/toast/targetdoc';
import { TemplateDocComponent } from '../../doc/toast/templatedoc';
import { TemplatesDocComponent } from '../../doc/toast/templatesdoc';
import { ClearDocComponent } from '../../doc/toast/cleardoc';
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
            component: BasicDocComponent
        },
        {
            id: 'severity',
            label: 'Severity',
            component: SeverityDocComponent
        },
        {
            id: 'position',
            label: 'Position',
            component: PositionDocComponent
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDocComponent
        },
        {
            id: 'target',
            label: 'Target',
            component: TargetDocComponent
        },
        {
            id: 'sticky',
            label: 'Sticky',
            component: StickyDocComponent
        },
        {
            id: 'clear',
            label: 'Clearing Messages',
            component: ClearDocComponent
        },
        {
            id: 'templating',
            label: 'Templating',
            component: TemplateDocComponent
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDocComponent
        },
        {
            id: 'animation',
            label: 'Animation',
            component: AnimationDocComponent
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
