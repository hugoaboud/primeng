import { Component } from '@angular/core';
import { TextDocComponent } from '../../doc/splitbutton/textdoc';
import { BasicDocComponent } from '../../doc/splitbutton/basicdoc';
import { ImportDocComponent } from '../../doc/splitbutton/importdoc';
import { NestedDocComponent } from '../../doc/splitbutton/nesteddoc';
import { RaisedDocComponent } from '../../doc/splitbutton/raiseddoc';
import { RoundedDocComponent } from '../../doc/splitbutton/roundeddoc';
import { SeverityDocComponent } from '../../doc/splitbutton/severitydoc';
import { RaisedTextDocComponent } from '../../doc/splitbutton/raisedtextdoc';
import { OutlinedDocComponent } from '../../doc/splitbutton/outlineddoc';
import { SizesDocComponent } from '../../doc/splitbutton/sizesdoc';
import { DisabledDocComponent } from '../../doc/splitbutton/disableddoc';
import { StyleDocComponent } from '../../doc/splitbutton/styledoc';
import { PropsDocComponent } from '../../doc/splitbutton/propsdoc';
import { EventsDocComponent } from '../../doc/splitbutton/eventsdoc';
import { TemplatesDocComponent } from '../../doc/splitbutton/templatesdoc';

@Component({
    templateUrl: './splitbuttondemo.html'
})
export class SplitButtonDemo {
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
            id: 'nested',
            label: 'Nested',
            component: NestedDocComponent
        },
        {
            id: 'severity',
            label: 'Severity',
            component: SeverityDocComponent
        },
        {
            id: 'raised',
            label: 'Raised',
            component: RaisedDocComponent
        },
        {
            id: 'rounded',
            label: 'Rounded',
            component: RoundedDocComponent
        },
        {
            id: 'text',
            label: 'Text',
            component: TextDocComponent
        },
        {
            id: 'raisedtext',
            label: 'Raised Text',
            component: RaisedTextDocComponent
        },
        {
            id: 'outlined',
            label: 'Outlined',
            component: OutlinedDocComponent
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDocComponent
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDocComponent
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
