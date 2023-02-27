import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { GalleriaAdvancedDemo } from './advanceddoc';
import { GalleriaAutoplayDemo } from './autoplaydoc';
import { GalleriaBasicDemo } from './basicdoc';
import { GalleriaCaptionDemo } from './captiondoc';
import { GalleriaControlledDemo } from './controlleddoc';
import { GalleriaFullScreenTemplateDemo } from './fullscreen/customcontentdoc';
import { FullScreenDocComponent } from './fullscreen/fullscreendoc';
import { GalleriaWithoutThumbnailsDemo } from './fullscreen/withoutthumbnailsdoc';
import { GalleriaWithThumbnailsDemo } from './fullscreen/withthumbnailsdoc';
import { ImportDocComponent } from './importdoc';
import { GalleriaIndicatorClickEventDemo } from './indicator/clickeventdoc';
import { GalleriaIndicatorHoverEventDemo } from './indicator/hovereventdoc';
import { IndicatorDocComponent } from './indicator/indicatordoc';
import { GalleriaIndicatorPositionedDemo } from './indicator/positioneddoc';
import { GalleriaIndicatorTemplateDemo } from './indicator/templatedoc';
import { HoverDocComponent } from './navigator/hoverdoc';
import { IndicatorsDocComponent } from './navigator/indicatorsdoc';
import { ItemThumbnailsDocComponent } from './navigator/itemthumbnailsdoc';
import { ItemWithoutThumbnailsDocComponent } from './navigator/itemwithoutthumbnailsdoc';
import { NavigatorDocComponent } from './navigator/navigatordoc';
import { PropsDocComponent } from './propsdoc';
import { GalleriaResponsiveDemo } from './responsivedoc';
import { StyleDocComponent } from './styledoc';
import { GalleriaThumbnailDemo } from './thumbnaildoc';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, GalleriaModule, FormsModule, ButtonModule, RadioButtonModule, CheckboxModule],
    declarations: [
        GalleriaAdvancedDemo,
        GalleriaAutoplayDemo,
        GalleriaBasicDemo,
        GalleriaCaptionDemo,
        GalleriaControlledDemo,
        GalleriaFullScreenTemplateDemo,
        FullScreenDocComponent,
        GalleriaWithoutThumbnailsDemo,
        GalleriaWithThumbnailsDemo,
        ImportDocComponent,
        GalleriaIndicatorClickEventDemo,
        GalleriaIndicatorHoverEventDemo,
        IndicatorDocComponent,
        GalleriaIndicatorPositionedDemo,
        GalleriaIndicatorTemplateDemo,
        HoverDocComponent,
        IndicatorsDocComponent,
        ItemThumbnailsDocComponent,
        ItemWithoutThumbnailsDocComponent,
        NavigatorDocComponent,
        PropsDocComponent,
        GalleriaResponsiveDemo,
        StyleDocComponent,
        GalleriaThumbnailDemo
    ],
    exports: [AppDocModule]
})
export class GalleriaDocModule {}
