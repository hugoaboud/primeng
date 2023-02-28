import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { PanelMenuBasicDemo } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { PanelMenuMultipleDemo } from './multipledoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, PanelMenuModule, AppDocModule],
    declarations: [PanelMenuBasicDemo, ImportDocComponent, PanelMenuMultipleDemo, MenuItemDocComponent, PropsDocComponent, StyleDocComponent],
    exports: [AppDocModule]
})
export class PanelMenuDocModule {}
