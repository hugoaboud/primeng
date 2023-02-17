import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { MethodsDocComponent } from './methodsdoc';
import { PopupDocComponent } from './popupdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, SlideMenuModule, ButtonModule, AppDocModule],
    declarations: [BasicDocComponent, ImportDocComponent, MenuItemDocComponent, MethodsDocComponent, PropsDocComponent, StyleDocComponent, PopupDocComponent],
    exports: [AppDocModule]
})
export class SlideMenuDocModule {}
