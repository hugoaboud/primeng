import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ContentDocComponent } from './contentdoc';
import { ImportDocComponent } from './importdoc';
import { LoginDocComponent } from './logindoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TypeDocComponent } from './typedoc';
import { VerticalDocComponent } from './verticaldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, DividerModule, ButtonModule, InputTextModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, TypeDocComponent, ContentDocComponent, VerticalDocComponent, LoginDocComponent, StyleDocComponent, PropsDocComponent]
})
export class DividerDocModule {}
