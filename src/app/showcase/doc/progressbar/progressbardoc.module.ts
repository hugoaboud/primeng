import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ProgressBarBasicDemo } from './basicdoc';
import { ProgressBarDynamicDemo } from './dynamicdoc';
import { ImportDocComponent } from './importdoc';
import { ProgressBarIndeterminateDemo } from './indeterminatedoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ProgressBarModule, ToastModule],
    declarations: [ProgressBarBasicDemo, ProgressBarDynamicDemo, ImportDocComponent, ProgressBarIndeterminateDemo, PropsDocComponent, StyleDocComponent],
    exports: [AppDocModule]
})
export class ProgressBarDocModule {}
