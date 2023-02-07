import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/terminal/basicdoc';
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
            component: BasicDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        },
        {
            id: 'props',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Terminal', pathname: '/modules/terminal.html' }]
        }
    ];
}
