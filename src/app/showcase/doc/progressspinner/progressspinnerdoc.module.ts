import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { CustomDocComponent } from './customdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ProgressSpinnerModule],
    declarations: [BasicDocComponent, ImportDocComponent, CustomDocComponent, PropsDocComponent, StyleDocComponent],
    exports: [BasicDocComponent, ImportDocComponent, CustomDocComponent, PropsDocComponent, StyleDocComponent]
})
export class ProgressSpinnerDocModule {}
