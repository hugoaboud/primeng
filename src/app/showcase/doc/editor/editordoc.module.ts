import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { DropdownModule } from 'primeng/dropdown';
import { ImportDocComponent } from './importdoc';
import { QuillDocComponent } from './quilldoc';
import { BasicDocComponent } from './basicdoc';
import { EditorModule } from 'primeng/editor';
import { ReadOnlyDocComponent } from './readonlydoc';
import { CustomToolbarDocComponent } from './customtoolbardoc';
import { PropsDocComponent } from './propsdoc';
import { EventsDocComponent } from './eventsdoc';
import { MethodsDocComponent } from './methodsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, EditorModule, FormsModule, DropdownModule],
    exports: [AppDocModule, ImportDocComponent, QuillDocComponent, BasicDocComponent, ReadOnlyDocComponent, CustomToolbarDocComponent, PropsDocComponent, EventsDocComponent, MethodsDocComponent, StyleDocComponent],
    declarations: [ImportDocComponent, QuillDocComponent, BasicDocComponent, ReadOnlyDocComponent, CustomToolbarDocComponent, PropsDocComponent, EventsDocComponent, MethodsDocComponent, StyleDocComponent]
})
export class EditorDocModule {}
