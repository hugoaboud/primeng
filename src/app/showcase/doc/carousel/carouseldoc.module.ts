import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { CarouselBasicDemo } from './basicdoc';
import { StyleDocComponent } from './styledoc';
import { PropsDocComponent } from './propsdoc';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CarouselCircularDemo } from './circulardoc';
import { EventsDocComponent } from './eventsdoc';
import { NumScrollDemo } from './numscrolldoc';
import { ResponsiveDocComponent } from './responsivedoc';
import { CarouselCustomContentDemo } from './templatedoc';
import { CarouselVerticalDemoComponent } from './verticaldoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, CarouselModule, ButtonModule],
    declarations: [ImportDocComponent, CarouselBasicDemo, CarouselCircularDemo, EventsDocComponent,NumScrollDemo, PropsDocComponent, StyleDocComponent, ResponsiveDocComponent, CarouselCustomContentDemo, CarouselVerticalDemoComponent],
    exports: [AppDocModule]
})
export class CarouselDocModule {}
