import { Component } from '@angular/core';
import { ArchitectureDocComponent } from '../../doc/theming/architecturedoc';
import { CSSVariablesDocComponent } from '../../doc/theming/cssvariablesdoc';
import { DesignerDocComponent } from '../../doc/theming/designerdoc';
import { LocalStylingDocComponent } from '../../doc/theming/localstylingdoc';
import { PrimeFlexDocComponent } from '../../doc/theming/primeflexdoc';
import { ScalingDocComponent } from '../../doc/theming/scalingdoc';
import { ThemesDocComponent } from '../../doc/theming/themesdoc';
import { UtilsDocComponent } from '../../doc/theming/utilsdoc';
@Component({
    templateUrl: './theming.component.html',
    styleUrls: ['./theming.component.scss']
})
export class ThemingComponent {
    docs = [
        {
            id: 'architecture',
            label: 'Architecture',
            component: ArchitectureDocComponent
        },
        {
            id: 'themes',
            label: 'Themes',
            component: ThemesDocComponent
        },
        {
            id: 'designer',
            label: 'Designer',
            component: DesignerDocComponent
        },
        {
            id: 'local-styling',
            label: 'Local Styling',
            component: LocalStylingDocComponent
        },
        {
            id: 'scale',
            label: 'Scale',
            component: ScalingDocComponent
        },
        {
            id: 'primeflex',
            label: 'PrimeFlex',
            component: PrimeFlexDocComponent
        },
        {
            id: 'utils',
            label: 'Utility Classes',
            component: UtilsDocComponent
        },
        {
            id: 'css-variables',
            label: 'CSS Variables',
            component: CSSVariablesDocComponent
        }
    ];
}
