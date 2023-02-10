import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { BasicDocComponent } from './basicdoc';
import { ElementDocComponent } from './elementdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ScrollTopModule],
    declarations: [BasicDocComponent, ElementDocComponent, ImportDocComponent, PropsDocComponent, StyleDocComponent],
    exports: [BasicDocComponent, ElementDocComponent, ImportDocComponent, PropsDocComponent, StyleDocComponent]
})
export class ScrollTopDocModule {}
