import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChipModule } from 'primeng/chip';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { IconDocComponent } from './icondoc';
import { ImageDocComponent } from './imagedoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TemplatingDocComponent } from './templatingdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ChipModule],
    declarations: [ImportDocComponent, BasicDocComponent, IconDocComponent, ImageDocComponent, PropsDocComponent, StyleDocComponent, TemplatingDocComponent, EventsDocComponent],
    exports: [ImportDocComponent, BasicDocComponent, IconDocComponent, ImageDocComponent, PropsDocComponent, StyleDocComponent, TemplatingDocComponent, EventsDocComponent]
})
export class ChipDocModule {}
