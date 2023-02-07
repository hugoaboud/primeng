import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { StyleDocComponent } from './styledoc';
import { PropsDocComponent } from './propsdoc';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CircularDocComponent } from './circulardoc';
import { EventsDocComponent } from './eventsdoc';
import { NumScrollDocComponent } from './numscrolldoc';
import { ResponsiveDocComponent } from './responsivedoc';
import { TemplateDocComponent } from './templatedoc';
import { VerticalDocComponent } from './verticaldoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, CarouselModule, ButtonModule],
    declarations: [ImportDocComponent, BasicDocComponent, CircularDocComponent, EventsDocComponent, NumScrollDocComponent, PropsDocComponent, StyleDocComponent, ResponsiveDocComponent, TemplateDocComponent, VerticalDocComponent],
    exports: [ImportDocComponent, BasicDocComponent, CircularDocComponent, EventsDocComponent, NumScrollDocComponent, PropsDocComponent, StyleDocComponent, ResponsiveDocComponent, TemplateDocComponent, VerticalDocComponent, AppDocModule]
})
export class CarouselDocModule {}
