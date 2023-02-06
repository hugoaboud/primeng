import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/ripple/importdoc';
import { StyleDocComponent } from '../../doc/ripple/styledoc';
import { CustomDocComponent } from '../../doc/ripple/customdoc';
import { DefaultDocComponent } from '../../doc/ripple/defaultdoc';

@Component({
    templateUrl: './rippledemo.html',
    styleUrls: ['./rippledemo.scss']
})
export class RippleDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'default',
            label: 'Default',
            component: DefaultDocComponent
        },
        {
            id: 'custom',
            label: 'Custom',
            component: CustomDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Ripple', pathname: '/modules/ripple.html' }]
        }
    ];
}
