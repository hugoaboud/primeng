import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { OverlayPanelBasicDemo } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TemplatesDocComponent } from './templatesdoc';
import { OverlayPanelDataTableDemo } from './datatabledoc';
import { OverlayPanelTemplateDemo } from './templatedoc';
import { OverlayPanelTargetDemo } from './targetdoc';
import { EventsDocComponent } from './eventsdoc';
import { MethodsDocComponent } from './methodsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, OverlayPanelModule, ButtonModule, TableModule, ToastModule, AppDocModule],
    declarations: [OverlayPanelBasicDemo, ImportDocComponent, PropsDocComponent, StyleDocComponent, TemplatesDocComponent, OverlayPanelDataTableDemo, OverlayPanelTemplateDemo, OverlayPanelTargetDemo, EventsDocComponent, MethodsDocComponent],
    exports: [AppDocModule]
})
export class OverlayPanelDocModule {}
