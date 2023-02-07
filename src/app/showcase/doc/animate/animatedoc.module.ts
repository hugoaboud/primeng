import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { PropsDocComponent } from './propsdoc';
import { AnimateModule } from 'primeng/animate';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, AnimateModule],
    declarations: [ImportDocComponent, BasicDocComponent, PropsDocComponent],
    exports: [ImportDocComponent, BasicDocComponent, PropsDocComponent, AppDocModule]
})
export class AnimateDocModule {}
