import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { DynamicDocComponent } from './dynamicdoc';
import { ImportDocComponent } from './importdoc';
import { IndeterminateDocComponent } from './indeterminatedoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ProgressBarModule, ToastModule],
    declarations: [BasicDocComponent, DynamicDocComponent, ImportDocComponent, IndeterminateDocComponent, PropsDocComponent, StyleDocComponent],
    exports: [BasicDocComponent, DynamicDocComponent, ImportDocComponent, IndeterminateDocComponent, PropsDocComponent, StyleDocComponent]
})
export class ProgressBarDocModule {}
