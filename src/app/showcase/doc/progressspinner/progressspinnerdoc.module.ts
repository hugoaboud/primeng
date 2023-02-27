import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ProgressSpinnerBasicDemo } from './basicdoc';
import { ProgressSpinnerTemplateDemo } from './templatedoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ProgressSpinnerModule],
    declarations: [ProgressSpinnerBasicDemo, ImportDocComponent, ProgressSpinnerTemplateDemo, PropsDocComponent, StyleDocComponent],
    exports: [AppDocModule]
})
export class ProgressSpinnerDocModule {}
