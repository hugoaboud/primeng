import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/badge/importdoc';
import { BadgeSizeDemo } from '../../doc/badge/sizedoc';
import { BadgeBasicDemo } from '../../doc/badge/basicdoc';
import { BadgeButtonDemo } from '../../doc/badge/buttondoc';
import { BadgeDirectiveDemo } from '../../doc/badge/directivedoc';
import { BadgePositionDemo } from '../../doc/badge/positiondoc';
import { BadgeSeverityDemo } from '../../doc/badge/severitydoc';
import { StyleDocComponent } from '../../doc/badge/styledoc';
import { PropsDocComponent } from '../../doc/badge/propsdoc';

@Component({
    templateUrl: './badgedemo.html'
})
export class BadgeDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BadgeBasicDemo
        },
        {
            id: 'directive',
            label: 'Directive',
            component: BadgeDirectiveDemo
        },
        {
            id: 'severity',
            label: 'Severity',
            component: BadgeSeverityDemo
        },
        {
            id: 'size',
            label: 'Size',
            component: BadgeSizeDemo
        },
        {
            id: 'position',
            label: 'Position',
            component: BadgePositionDemo
        },
        {
            id: 'button',
            label: 'Button',
            component: BadgeButtonDemo
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
            id: 'api',
            label: 'API',
            doc: [{ name: 'Badge', pathname: '/modules/badge.html' }]
        }
    ];
}
