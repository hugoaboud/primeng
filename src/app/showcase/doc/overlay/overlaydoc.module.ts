import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OverlayModule } from 'primeng/overlay';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { OverlayBasicDemo } from './basicdoc';
import { AppendToDocComponent } from './appendtodoc';
import { AutoZIndexDocComponent } from './autozindexdoc';
import { BaseZIndexDocComponent } from './basezindexdoc';
import { EventsDocComponent } from './eventsdoc';
import { HideOnEscapeDocComponent } from './hideonescapedoc';
import { ImportDocComponent } from './importdoc';
import { ModeDocComponent } from './modedoc';
import { OptionsDocComponent } from './overlayoptionsdoc';
import { ResponsiveDocComponent } from './responsivedoc';
import { StyleDocComponent } from './styledoc';
import { TargetDocComponent } from './targetdoc';
import { OverlayTemplateDemo } from './templatedoc';
import { TransitionOptionsDocComponent } from './transitionoptionsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, OverlayModule, ButtonModule, AppDocModule],
    exports: [AppDocModule],
    declarations: [
        AppendToDocComponent,
        AutoZIndexDocComponent,
        BaseZIndexDocComponent,
        OverlayBasicDemo,
        EventsDocComponent,
        HideOnEscapeDocComponent,
        ImportDocComponent,
        ModeDocComponent,
        OptionsDocComponent,
        ResponsiveDocComponent,
        StyleDocComponent,
        TargetDocComponent,
        OverlayTemplateDemo,
        TransitionOptionsDocComponent
    ]
})
export class OverlayDocModule {}
