import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { SlideMenuBasicDemo } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { MethodsDocComponent } from './methodsdoc';
import { SlideMenuPopupDemo } from './popupdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, SlideMenuModule, ButtonModule, AppDocModule],
    declarations: [SlideMenuBasicDemo, ImportDocComponent, MenuItemDocComponent, MethodsDocComponent, PropsDocComponent, StyleDocComponent, SlideMenuPopupDemo],
    exports: [AppDocModule]
})
export class SlideMenuDocModule {}
