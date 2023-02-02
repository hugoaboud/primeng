import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaDemoRoutingModule } from './galleriademo-routing.module';

import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { GalleriaAdvancedDemo } from './galleriaadvanceddemo';
import { GalleriaAutoPlayDemo } from './galleriaautoplaydemo';
import { GalleriaCaptionDemo } from './galleriacaptiondemo';
import { GalleriaDemo } from './galleriademo';
import { GalleriaFullscreenDemo } from './galleriafullscreendemo';
import { GalleriaIndicatorDemo } from './galleriaindicatordemo';
import { GalleriaNavigatorDemo } from './gallerianavigatordemo';
import { GalleriaProgrammaticDemo } from './galleriaprogrammaticdemo';
import { GalleriaResponsiveDemo } from './galleriaresponsivedemo';
import { GalleriaThumbnailDemo } from './galleriathumbnaildemo';

@NgModule({
    imports: [CommonModule, GalleriaDemoRoutingModule, GalleriaModule, TabViewModule, AppCodeModule, AppDemoActionsModule, ButtonModule],
    declarations: [GalleriaDemo, GalleriaProgrammaticDemo, GalleriaIndicatorDemo, GalleriaThumbnailDemo, GalleriaNavigatorDemo, GalleriaResponsiveDemo, GalleriaFullscreenDemo, GalleriaAutoPlayDemo, GalleriaCaptionDemo, GalleriaAdvancedDemo]
})
export class GalleriaDemoModule {}
