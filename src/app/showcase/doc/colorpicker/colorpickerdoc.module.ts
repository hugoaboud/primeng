import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { InlineDocComponent } from './inlinedoc';
import { FormatDocComponent } from './formatdoc';
import { DisabledDocComponent } from './disableddoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { EventsDocComponent } from './eventsdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, ColorPickerModule],
    exports: [AppDocModule, ImportDocComponent, BasicDocComponent, InlineDocComponent, FormatDocComponent, DisabledDocComponent, PropsDocComponent, StyleDocComponent, EventsDocComponent],
    declarations: [ImportDocComponent, BasicDocComponent, InlineDocComponent, FormatDocComponent, DisabledDocComponent, PropsDocComponent, StyleDocComponent, EventsDocComponent]
})
export class ColorPickerDocModule { }
