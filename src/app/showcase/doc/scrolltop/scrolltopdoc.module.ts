import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollTopBasicDemo } from './basicdoc';
import { ScrollTopElementDemo } from './elementdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ScrollTopModule],
    declarations: [ScrollTopBasicDemo, ScrollTopElementDemo, ImportDocComponent, PropsDocComponent, StyleDocComponent],
    exports: [AppDocModule]
})
export class ScrollTopDocModule {}
