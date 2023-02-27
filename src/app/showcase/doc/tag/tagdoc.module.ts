import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { StyleDocComponent } from './styledoc';
import { TagBasicDDemo } from './basicdoc';
import { TagIconDemo } from './icondoc';
import { ImportDocComponent } from './importdoc';
import { TagPillDemo } from './pilldoc';
import { PropsDocComponent } from './propsdoc';
import { TagTemplateDemo } from './templatedoc';
import { TagSeverityDemo } from './severitydoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, TagModule, ButtonModule],
    declarations: [ImportDocComponent, TagBasicDDemo, TagIconDemo, TagPillDemo, PropsDocComponent, StyleDocComponent, TagTemplateDemo, TagSeverityDemo],
    exports: [AppDocModule]
})
export class TagDocModule {}
