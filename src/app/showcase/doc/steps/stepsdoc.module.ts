import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { InteractiveDocComponent } from './interactivedoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { MethodsDocComponent } from './methodsdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, StepsModule, ToastModule, AppDocModule],
    declarations: [BasicDocComponent, ImportDocComponent, MenuItemDocComponent, MethodsDocComponent, PropsDocComponent, StyleDocComponent, InteractiveDocComponent, EventsDocComponent],
    exports: [AppDocModule]
})
export class StepsDocModule {}
