import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TerminalModule } from 'primeng/terminal';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { TerminalBasicDemo } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, TerminalModule],
    declarations: [ImportDocComponent, TerminalBasicDemo, StyleDocComponent, PropsDocComponent],
    exports: [AppDocModule]
})
export class TerminalDocModule {}
