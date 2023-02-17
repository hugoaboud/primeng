import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { PopupDocComponent } from './popupdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { MethodsDocComponent } from './methodsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TieredMenuModule, ButtonModule, AppDocModule],
    declarations: [BasicDocComponent, EventsDocComponent, ImportDocComponent, MenuItemDocComponent, PopupDocComponent, PropsDocComponent, StyleDocComponent, MethodsDocComponent],
    exports: [AppDocModule]
})
export class TieredMenuDocModule {}
