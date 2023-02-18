import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TemplatesDocComponent } from './templatesdoc';
import { DataTableDocComponent } from './datatabledoc';
import { CustomDocComponent } from './customdoc';
import { TargetDocComponent } from './targetdoc';
import { EventsDocComponent } from './eventsdoc';
import { MethodsDocComponent } from './methodsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, OverlayPanelModule, ButtonModule, TableModule, ToastModule, AppDocModule],
    declarations: [BasicDocComponent, ImportDocComponent, PropsDocComponent, StyleDocComponent, TemplatesDocComponent, DataTableDocComponent, CustomDocComponent, TargetDocComponent, EventsDocComponent, MethodsDocComponent],
    exports: [AppDocModule]
})
export class OverlayPanelDocModule {}
