import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AdvancedDocComponent } from './advanceddoc';
import { AutoplayDocComponent } from './autoplaydoc';
import { BasicDocComponent } from './basicdoc';
import { CaptionDocComponent } from './captiondoc';
import { ControlledDocComponent } from './controlleddoc';
import { CustomContentDocComponent } from './fullscreen/customcontentdoc';
import { FullScreenDocComponent } from './fullscreen/fullscreendoc';
import { WithoutThumbnailsDocComponent } from './fullscreen/withoutthumbnailsdoc';
import { WithThumbnailsDocComponent } from './fullscreen/withthumbnailsdoc';
import { ImportDocComponent } from './importdoc';
import { ClickEventDocComponent } from './indicator/clickeventdoc';
import { HoverEventDocComponent } from './indicator/hovereventdoc';
import { IndicatorDocComponent } from './indicator/indicatordoc';
import { PositionedDocComponent } from './indicator/positioneddoc';
import { TemplateDocComponent } from './indicator/templatedoc';
import { HoverDocComponent } from './navigator/hoverdoc';
import { IndicatorsDocComponent } from './navigator/indicatorsdoc';
import { ItemThumbnailsDocComponent } from './navigator/itemthumbnailsdoc';
import { ItemWithoutThumbnailsDocComponent } from './navigator/itemwithoutthumbnailsdoc';
import { NavigatorDocComponent } from './navigator/navigatordoc';
import { PropsDocComponent } from './propsdoc';
import { ResponsiveDocComponent } from './responsivedoc';
import { StyleDocComponent } from './styledoc';
import { ThumbnailDocComponent } from './thumbnaildoc';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, GalleriaModule, FormsModule, ButtonModule, RadioButtonModule, CheckboxModule],
    declarations: [
        AdvancedDocComponent,
        AutoplayDocComponent,
        BasicDocComponent,
        CaptionDocComponent,
        ControlledDocComponent,
        CustomContentDocComponent,
        FullScreenDocComponent,
        WithoutThumbnailsDocComponent,
        WithThumbnailsDocComponent,
        ImportDocComponent,
        ClickEventDocComponent,
        HoverEventDocComponent,
        IndicatorDocComponent,
        PositionedDocComponent,
        TemplateDocComponent,
        HoverDocComponent,
        IndicatorsDocComponent,
        ItemThumbnailsDocComponent,
        ItemWithoutThumbnailsDocComponent,
        NavigatorDocComponent,
        PropsDocComponent,
        ResponsiveDocComponent,
        StyleDocComponent,
        ThumbnailDocComponent
    ],
    exports: [
        AdvancedDocComponent,
        AutoplayDocComponent,
        BasicDocComponent,
        CaptionDocComponent,
        ControlledDocComponent,
        CustomContentDocComponent,
        FullScreenDocComponent,
        WithoutThumbnailsDocComponent,
        WithThumbnailsDocComponent,
        ImportDocComponent,
        ClickEventDocComponent,
        HoverEventDocComponent,
        IndicatorDocComponent,
        PositionedDocComponent,
        TemplateDocComponent,
        HoverDocComponent,
        IndicatorsDocComponent,
        ItemThumbnailsDocComponent,
        ItemWithoutThumbnailsDocComponent,
        NavigatorDocComponent,
        PropsDocComponent,
        ResponsiveDocComponent,
        StyleDocComponent,
        ThumbnailDocComponent,
        AppDocModule
    ]
})
export class GalleriaDocModule {}
