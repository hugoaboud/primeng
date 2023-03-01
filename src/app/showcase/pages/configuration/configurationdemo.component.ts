import { Component } from '@angular/core';
import { AnimationsDocComponent } from '../../doc/configuration/animationsdoc';
import { FilterModeDocComponent } from '../../doc/configuration/filtermodedoc';
import { ImportDocComponent } from '../../doc/configuration/importdoc';
import { RippleDocComponent } from '../../doc/configuration/rippledoc';
import { ZIndexDocComponent } from '../../doc/configuration/zindexdoc';

@Component({
    selector: 'configuration',
    templateUrl: './configurationdemo.component.html'
})
export class ConfigurationDemoComponent {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'animations',
            label: 'Animations',
            component: AnimationsDocComponent
        },
        {
            id: 'ripple',
            label: 'Ripple',
            component: RippleDocComponent
        },
        {
            id: 'zIndex',
            label: 'ZIndex',
            component: ZIndexDocComponent
        },
        {
            id: 'filter-mode',
            label: 'Filter Mode',
            component: FilterModeDocComponent
        }
    ];
}
