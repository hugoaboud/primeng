import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlockUIModule } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { DocumentDocComponent } from './documentdoc';
import { ImportDocComponent } from './importdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, PanelModule, ButtonModule, BlockUIModule],
    declarations: [ImportDocComponent, BasicDocComponent, DocumentDocComponent, StyleDocComponent],
    exports: [ImportDocComponent, BasicDocComponent, DocumentDocComponent, StyleDocComponent]
})
export class BlockUIDocModule {}
