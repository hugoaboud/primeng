import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { DisabledDocComponent } from './disableddoc';
import { DynamicDocComponent } from './dynamicdoc';
import { EventsDocComponent } from './eventsdoc';
import { GroupDocComponent } from './groupdoc';
import { ImportDocComponent } from './importdoc';
import { InvalidDocComponent } from './invaliddoc';
import { MethodsDocComponent } from './methodsdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, RadioButtonModule, FormsModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, GroupDocComponent, DynamicDocComponent, InvalidDocComponent, DisabledDocComponent, PropsDocComponent, EventsDocComponent, MethodsDocComponent, StyleDocComponent]
})
export class RadioButtonDocModule {}
