import { Component } from '@angular/core';
import { BadgesDocComponent } from '../../doc/button/badgesdoc';
import { BasicDocComponent } from '../../doc/button/basicdoc';
import { ButtonsetDocComponent } from '../../doc/button/buttonsetdoc';
import { DisabledDocComponent } from '../../doc/button/disableddoc';
import { IconsDocComponent } from '../../doc/button/iconsdoc';
import { IconOnlyDocComponent } from '../../doc/button/iconsonlydoc';
import { ImportDocComponent } from '../../doc/button/importdoc';
import { LinkDocComponent } from '../../doc/button/linkdoc';
import { LoadingDocComponent } from '../../doc/button/loadingdoc';
import { OutlinedDocComponent } from '../../doc/button/outlineddoc';
import { PropsDocComponent } from '../../doc/button/propsdoc';
import { RaisedDocComponent } from '../../doc/button/raiseddoc';
import { RaisedTextDocComponent } from '../../doc/button/raisedtextdoc';
import { RoundedDocComponent } from '../../doc/button/roundeddoc';
import { SeverityDocComponent } from '../../doc/button/severitydoc';
import { SizesDocComponent } from '../../doc/button/sizesdoc';
import { StyleDocComponent } from '../../doc/button/styledoc';
import { TemplateDocComponent } from '../../doc/button/templatedoc';
import { TemplatesDocComponent } from '../../doc/button/templatesdoc';
import { TextDocComponent } from '../../doc/button/textdoc';

@Component({
    templateUrl: './buttondemo.html',
    styleUrls: ['./buttondemo.scss']
})
export class ButtonDemo {
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
            id: 'link',
            label: 'Link',
            component: LinkDocComponent
        },
        {
            id: 'icons',
            label: 'Icons',
            component: IconsDocComponent
        },
        {
            id: 'loading',
            label: 'Loading',
            component: LoadingDocComponent
        },
        {
            id: 'severity',
            label: 'Severity',
            component: SeverityDocComponent
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDocComponent
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
            id: 'icononly',
            label: 'Icon Only',
            component: IconOnlyDocComponent
        },
        {
            id: 'badges',
            label: 'Badges',
            component: BadgesDocComponent
        },
        {
            id: 'buttonset',
            label: 'Button Set',
            component: ButtonsetDocComponent
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDocComponent
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDocComponent
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
