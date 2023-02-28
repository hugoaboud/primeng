import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ConfirmDialogBasicDemo } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { ConfirmDialogPositionDemo } from './positiondoc';
import { ConfirmDialogTemplateDemo } from './customdoc';
import { ServiceDocComponent } from './servicedoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, ConfirmDialogModule, ButtonModule, ToastModule, AppDocModule],
    declarations: [ConfirmDialogBasicDemo, EventsDocComponent, ImportDocComponent, PropsDocComponent, StyleDocComponent, ConfirmDialogPositionDemo, ConfirmDialogTemplateDemo, ServiceDocComponent, TemplatesDocComponent],
    exports: [AppDocModule]
})
export class ConfirmDialogDocModule {}
