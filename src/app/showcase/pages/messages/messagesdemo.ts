import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/messages/importdoc';
import { BasicDocComponent } from '../../doc/messages/basicdoc';
import { MessagesPropsDocComponent } from '../../doc/messages/messagespropsdoc';
import { MessagePropsDocComponent } from '../../doc/messages/messagepropsdoc';
import { MessagesStyleDocComponent } from '../../doc/messages/messagesstyledoc';
import { MessageStyleDocComponent } from '../../doc/messages/messagestyledoc';
import { ClosableDocComponent } from '../../doc/messages/closabledoc';
import { InlineDocComponent } from '../../doc/messages/inlinedoc';
import { DynamicDocComponent } from '../../doc/messages/dynamicdoc';
import { StaticDocComponent } from '../../doc/messages/staticdoc';
import { ServiceDocComponent } from '../../doc/messages/servicedoc';
import { AnimationDocComponent } from '../../doc/messages/animationdoc';
import { TemplatesDocComponent } from '../../doc/messages/templatesdoc';

@Component({
    templateUrl: './messagesdemo.html'
})
export class MessagesDemo {
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
            id: 'closable',
            label: 'Closable',
            component: ClosableDocComponent
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDocComponent
        },
        {
            id: 'service',
            label: 'Message Service',
            component: ServiceDocComponent
        },
        {
            id: 'static',
            label: 'Static Content',
            component: StaticDocComponent
        },
        {
            id: 'inline',
            label: 'Inline',
            component: InlineDocComponent
        },
        {
            id: 'animation',
            label: 'Animation',
            component: AnimationDocComponent
        },
        {
            id: 'messagesstyle',
            label: 'Styling for Messages',
            component: MessagesStyleDocComponent
        },
        {
            id: 'messagestyle',
            label: 'Styling for Message',
            component: MessageStyleDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'messagesprops',
            label: 'Properties of Messages',
            component: MessagesPropsDocComponent
        },
        {
            id: 'messageprops',
            label: 'Properties of Message',
            component: MessagePropsDocComponent
        },
        {
            id: 'templates',
            label: 'Templates',
            component: TemplatesDocComponent
        }
    ];
}
