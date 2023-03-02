import { Component } from '@angular/core';
import { OverviewDocComponent } from '../../doc/colors/overviewdoc';
import { PaletteDocComponent } from '../../doc/colors/palettedoc';
import { SurfacesDocComponent } from '../../doc/colors/surfacesdoc';

@Component({
    templateUrl: './colors.component.html',
})
export class ColorsDemoComponent {
    docs = [
        {
            id: 'overview',
            label: 'Overview',
            component: OverviewDocComponent
        },
        {
            id: 'surfaces',
            label: 'Surfaces',
            component: SurfacesDocComponent
        },
        {
            id: 'palette',
            label: 'Palette',
            component: PaletteDocComponent
        }
    ];
}
