import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/badge/importdoc';
import { SizeDocComponent } from '../../doc/badge/sizedoc';
import { BasicDocComponent } from '../../doc/badge/basicdoc';
import { ButtonDocComponent } from '../../doc/badge/buttondoc';
import { DirectiveDocComponent } from '../../doc/badge/directivedoc';
import { PositionDocComponent } from '../../doc/badge/positiondoc';
import { SeverityDocComponent } from '../../doc/badge/severitydoc';
import { StyleDocComponent } from '../../doc/badge/styledoc';

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
            component: BasicDocComponent
        },
        {
            id: 'directive',
            label: 'Directive',
            component: DirectiveDocComponent
        },
        {
            id: 'severity',
            label: 'Severity',
            component: SeverityDocComponent
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDocComponent
        },
        {
            id: 'position',
            label: 'Position',
            component: PositionDocComponent
        },
        {
            id: 'button',
            label: 'Button',
            component: ButtonDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        },
    ];
}
