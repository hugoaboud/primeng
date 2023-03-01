import { Component } from '@angular/core';
import { ColorsDocComponent } from '../../doc/accessibility/colorsdoc';
import { FormControlsDocComponent } from '../../doc/accessibility/formcontrolsdoc';
import { IntroductionDocComponent } from '../../doc/accessibility/introductiondoc';
import { SemanticHTMLDocComponent } from '../../doc/accessibility/semantichtmldoc';
import { WAIARIADocComponent } from '../../doc/accessibility/wai-ariadoc';
import { WCAGDocComponent } from '../../doc/accessibility/WCAGdoc';

@Component({
    selector: 'accessibility',
    templateUrl: './accessibilitydemo.component.html'
})
export class AccessibilityDemoComponent {
    docs = [
        {
            id: 'introduction',
            label: 'Introduction',
            component: IntroductionDocComponent
        },
        {
            id: 'wcag',
            label: 'WCAG',
            component: WCAGDocComponent
        },
        {
            id: 'form-controls',
            label: 'Form Controls',
            component: FormControlsDocComponent
        },
        {
            id: 'semantic-html',
            label: 'Semantic HTML',
            component: SemanticHTMLDocComponent
        },
        {
            id: 'wai-aria',
            label: 'WAI-ARIA',
            component: WAIARIADocComponent
        },
        {
            id: 'colors',
            label: 'Colors',
            component: ColorsDocComponent
        }
    ];
}
