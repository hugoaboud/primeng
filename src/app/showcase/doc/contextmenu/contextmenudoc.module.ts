import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContextMenuModule } from 'primeng/contextmenu';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ContextMenuBasicDemo } from './basicdoc';
import { ContextMenuDocumentDemo } from './documentdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { MethodsDocComponent } from './methodsdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { ContextMenuTriggerEventDemo } from './triggereventdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, ContextMenuModule, AppDocModule],
    declarations: [ContextMenuBasicDemo, ImportDocComponent, ContextMenuDocumentDemo, EventsDocComponent, MenuItemDocComponent, MethodsDocComponent, PropsDocComponent, StyleDocComponent, ContextMenuTriggerEventDemo],
    exports: [AppDocModule]
})
export class ContextMenuDocModule {}
