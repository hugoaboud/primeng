import { Component } from '@angular/core';
import { OverlayBasicDemo } from '../../doc/overlay/basicdoc';
import { AppendToDocComponent } from '../../doc/overlay/appendtodoc';
import { AutoZIndexDocComponent } from '../../doc/overlay/autozindexdoc';
import { BaseZIndexDocComponent } from '../../doc/overlay/basezindexdoc';
import { EventsDocComponent } from '../../doc/overlay/eventsdoc';
import { HideOnEscapeDocComponent } from '../../doc/overlay/hideonescapedoc';
import { ImportDocComponent } from '../../doc/overlay/importdoc';
import { ModeDocComponent } from '../../doc/overlay/modedoc';
import { OptionsDocComponent } from '../../doc/overlay/overlayoptionsdoc';
import { ResponsiveDocComponent } from '../../doc/overlay/responsivedoc';
import { StyleDocComponent } from '../../doc/overlay/styledoc';
import { TargetDocComponent } from '../../doc/overlay/targetdoc';
import { OverlayTemplateDemo } from '../../doc/overlay/templatedoc';
import { TransitionOptionsDocComponent } from '../../doc/overlay/transitionoptionsdoc';

@Component({
    templateUrl: './overlaydemo.html'
})
export class OverlayDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: OverlayBasicDemo
        },
        {
            id: 'template',
            label: 'Template',
            component: OverlayTemplateDemo
        },
        {
            id: 'options',
            label: 'Options',
            component: OptionsDocComponent,
            children: [
                {
                    id: 'mode',
                    label: 'Mode',
                    component: ModeDocComponent
                },
                {
                    id: 'responsive',
                    label: 'Responsive',
                    component: ResponsiveDocComponent
                },
                {
                    id: 'append-to',
                    label: 'AppendTo',
                    component: AppendToDocComponent
                },
                {
                    id: 'target',
                    label: 'Target',
                    component: TargetDocComponent
                },
                {
                    id: 'style',
                    label: 'Style',
                    component: StyleDocComponent
                },
                {
                    id: 'base-z-index',
                    label: 'BaseZIndex',
                    component: BaseZIndexDocComponent
                },
                {
                    id: 'auto-z-index',
                    label: 'AutoZIndex',
                    component: AutoZIndexDocComponent
                },
                {
                    id: 'hide-on-escape',
                    label: 'HideOnEscape',
                    component: HideOnEscapeDocComponent
                },
                {
                    id: 'transition-options',
                    label: 'ShowTransitionOptions and HideTransitionOptions',
                    component: TransitionOptionsDocComponent
                },
                {
                    id: 'events',
                    label: 'Events',
                    component: EventsDocComponent
                }
            ]
        }
    ];
}
