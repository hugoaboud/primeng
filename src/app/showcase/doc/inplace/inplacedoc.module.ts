import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { InplaceBasicDemo } from './basicdoc';
import { InplaceDataDemo } from './datadoc';
import { EventsDocComponent } from './eventsdoc';
import { InplaceImageDemo } from './imagedoc';
import { ImportDocComponent } from './importdoc';
import { InplaceInputDemo } from './inputdoc';
import { MethodsDocComponent } from './methodsdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, InplaceModule, InputTextModule],
    declarations: [InplaceBasicDemo, InplaceDataDemo, EventsDocComponent, InplaceImageDemo, ImportDocComponent, InplaceInputDemo, MethodsDocComponent, PropsDocComponent, StyleDocComponent],
    exports: [AppDocModule]
})
export class InplaceDocModule {}
