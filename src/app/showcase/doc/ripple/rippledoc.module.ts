import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { CustomDocComponent } from './customdoc';
import { DefaultDocComponent } from './defaultdoc';
import { ImportDocComponent } from './importdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, RippleModule],
    declarations: [DefaultDocComponent, ImportDocComponent, StyleDocComponent, CustomDocComponent],
    exports: [DefaultDocComponent, ImportDocComponent, StyleDocComponent, CustomDocComponent]
})
export class RippleDocModule {}
