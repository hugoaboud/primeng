import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { StyleDocComponent } from './styledoc';
import { BasicDocComponent } from './basicdoc';
import { IconDocComponent } from './icondoc';
import { ImportDocComponent } from './importdoc';
import { PillDocComponent } from './pilldoc';
import { PropsDocComponent } from './propsdoc';
import { TemplateDocComponent } from './templatedoc';
import { SeverityDocComponent } from './severitydoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, TagModule, ButtonModule],
    declarations: [ImportDocComponent, BasicDocComponent, IconDocComponent, PillDocComponent, PropsDocComponent, StyleDocComponent, TemplateDocComponent, SeverityDocComponent],
    exports: [ImportDocComponent, BasicDocComponent, IconDocComponent, PillDocComponent, PropsDocComponent, StyleDocComponent, TemplateDocComponent, SeverityDocComponent]
})
export class TagDocModule {}
