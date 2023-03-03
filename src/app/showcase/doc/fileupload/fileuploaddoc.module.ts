import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { FileUploadAdvancedDemo } from './advanceddoc';
import { FileUploadBasicDemo } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { MethodsDocComponent } from './methodsdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { FileUploadTemplateDemo } from './templatedoc';
import { TemplatesDocComponent } from './templatesdoc';
import { FileUploadAutoDemo } from './autodoc';

@NgModule({
    imports: [CommonModule, FormsModule, AppCodeModule, AppDocModule, ButtonModule, TagModule, ProgressBarModule, ToastModule, FileUploadModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, FileUploadBasicDemo, FileUploadTemplateDemo, StyleDocComponent, PropsDocComponent, EventsDocComponent, TemplatesDocComponent, FileUploadAdvancedDemo, MethodsDocComponent, FileUploadAutoDemo]
})
export class FileUploadDocModule {}
