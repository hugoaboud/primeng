import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TerminalModule } from 'primeng/terminal';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, TerminalModule],
    declarations: [ImportDocComponent, BasicDocComponent, StyleDocComponent, PropsDocComponent],
    exports: [ImportDocComponent, BasicDocComponent, StyleDocComponent, PropsDocComponent]
})
export class TerminalDocModule {}
