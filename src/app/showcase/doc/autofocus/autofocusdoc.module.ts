import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { PropsDocComponent } from './propsdoc';
import { AutoFocusModule } from 'primeng/autofocus';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, AutoFocusModule, InputTextModule],
    declarations: [ImportDocComponent, BasicDocComponent, PropsDocComponent],
    exports: [ImportDocComponent, BasicDocComponent, PropsDocComponent, AppDocModule]
})
export class AutoFocusDocModule {}
