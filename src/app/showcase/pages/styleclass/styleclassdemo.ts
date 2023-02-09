import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/styleclass/importdoc';
import { PropsDocComponent } from '../../doc/styleclass/propsdoc';
import { AnimationDocComponent } from '../../doc/styleclass/animationdoc';
import { ToggleClassDocComponent } from '../../doc/styleclass/toggleclassdoc';

@Component({
    templateUrl: './styleclassdemo.html'
})
export class StyleClassDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'toggleclass',
            label: 'Toggle Class',
            component: ToggleClassDocComponent
        },
        {
            id: 'animation',
            label: 'Animation',
            component: AnimationDocComponent
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
            doc: [{ name: 'StyleClass', pathname: '/modules/styleclass.html' }]
        }
    ];
}
