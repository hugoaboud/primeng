import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { MultipleDocComponent } from './multipledoc';
import { LabelDocComponent } from './labeldoc';
import { DynamicDocComponent } from './dynamicdoc';
import { DisabledDocComponent } from './disableddoc';
import { StyleDocComponent } from './styledoc';
import { PropsDocComponent } from './propsdoc';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, AppCodeModule, AppDocModule, CheckboxModule],
    exports: [ImportDocComponent],
    declarations: [ImportDocComponent, BasicDocComponent, MultipleDocComponent, LabelDocComponent, DynamicDocComponent, DisabledDocComponent, StyleDocComponent, PropsDocComponent]
})
export class CheckboxDocModule {}
