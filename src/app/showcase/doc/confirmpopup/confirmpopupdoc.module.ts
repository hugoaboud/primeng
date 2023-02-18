import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { ServiceDocComponent } from './servicedoc';
import { ConfirmationApiDocComponent } from './confirmationapidoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, ConfirmPopupModule, ButtonModule, ToastModule, AppDocModule],
    declarations: [BasicDocComponent, ImportDocComponent, PropsDocComponent, StyleDocComponent, ServiceDocComponent, ConfirmationApiDocComponent],
    exports: [AppDocModule]
})
export class ConfirmPopupDocModule {}
