import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/animate/importdoc';
import { BasicDocComponent } from '../../doc/animate/basicdoc';
import { PropsDocComponent } from '../../doc/animate/propsdoc';

@Component({
    templateUrl: './animatedemo.html'
})
export class AnimateDemo {
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
            id: 'props',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Animate', pathname: '/modules/animate.html' }]
        }
    ];
}
