import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { TimelineModule } from 'primeng/timeline';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { AlignmentDocComponent } from './alignmentdoc';
import { OppositeDocComponent } from './oppositedoc';
import { TemplateDocComponent } from './templatedoc';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HorizontalDocComponent } from './horizontaldoc';
import { StyleDocComponent } from './styledoc';
import { RouterModule } from '@angular/router';
import { PropsDocComponent } from './propsdoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, TimelineModule, CardModule, ButtonModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, AlignmentDocComponent, OppositeDocComponent, TemplateDocComponent, HorizontalDocComponent, StyleDocComponent, PropsDocComponent, TemplatesDocComponent]
})
export class TimelineDocModule {}
