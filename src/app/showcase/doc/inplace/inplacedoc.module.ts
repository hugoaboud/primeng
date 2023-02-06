import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { DataDocComponent } from './datadoc';
import { EventsDocComponent } from './eventsdoc';
import { ImageDocComponent } from './imagedoc';
import { ImportDocComponent } from './importdoc';
import { InputDocComponent } from './inputdoc';
import { MethodsDocComponent } from './methodsdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, InplaceModule, InputTextModule],
    declarations: [BasicDocComponent, DataDocComponent, EventsDocComponent, ImageDocComponent, ImportDocComponent, InputDocComponent, MethodsDocComponent, PropsDocComponent, StyleDocComponent],
    exports: [BasicDocComponent, DataDocComponent, EventsDocComponent, ImageDocComponent, ImportDocComponent, InputDocComponent, MethodsDocComponent, PropsDocComponent, StyleDocComponent]
})
export class InplaceDocModule {}
