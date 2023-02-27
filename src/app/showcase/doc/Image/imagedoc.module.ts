import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { TemplatesDocComponent } from './templatesdoc';
import { ImageBasicDemo } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImageIndicatorTemplateDemo } from './indicatortemplatedoc';
import { ImagePreviewDemo } from './previewdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { ImportDocComponent } from './importdoc';

@NgModule({
    imports: [CommonModule, RouterModule, ImageModule, AppCodeModule, AppDocModule],
    declarations: [ImportDocComponent, ImageBasicDemo, ImageIndicatorTemplateDemo, ImagePreviewDemo, StyleDocComponent, PropsDocComponent, EventsDocComponent, TemplatesDocComponent],
    exports: [AppDocModule]
})
export class ImageDocModule {}
