import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/ripple/importdoc';
import { StyleDocComponent } from '../../doc/ripple/styledoc';
import { RippleCustomDemo } from '../../doc/ripple/customdoc';
import { RippleDefaultDemo } from '../../doc/ripple/defaultdoc';

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
            component: RippleDefaultDemo
        },
        {
            id: 'custom',
            label: 'Custom',
            component: RippleCustomDemo
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        }
    ];
}
