import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { DividerBasicDemo } from './basicdoc';
import { DividerContentDemo } from './contentdoc';
import { ImportDocComponent } from './importdoc';
import { DividerLoginDemo } from './logindoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { DividerTypeDemo } from './typedoc';
import { DividerVerticalDemo } from './verticaldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, DividerModule, ButtonModule, InputTextModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, DividerBasicDemo, DividerTypeDemo, DividerContentDemo, DividerVerticalDemo, DividerLoginDemo, StyleDocComponent, PropsDocComponent]
})
export class DividerDocModule {}
