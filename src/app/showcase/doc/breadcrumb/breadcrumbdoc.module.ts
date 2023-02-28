import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { StyleDocComponent } from './styledoc';
import { BreadcrumbBasicDemo } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { PropsDocComponent } from './propsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, BreadcrumbModule, AppDocModule],
    declarations: [BreadcrumbBasicDemo, EventsDocComponent, ImportDocComponent, MenuItemDocComponent, PropsDocComponent, EventsDocComponent, StyleDocComponent],
    exports: [AppDocModule]
})
export class BreadcrumbDocModule {}
