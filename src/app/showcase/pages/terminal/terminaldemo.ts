import { Component } from '@angular/core';
import { TerminalBasicDemo } from '../../doc/terminal/basicdoc';
import { PropsDocComponent } from '../../doc/terminal/propsdoc';
import { StyleDocComponent } from '../../doc/terminal/styledoc';
import { ImportDocComponent } from '../../doc/terminal/importdoc';

@Component({
    templateUrl: './terminaldemo.html'
})
export class TerminalDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: TerminalBasicDemo
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
        }
    ];
}
