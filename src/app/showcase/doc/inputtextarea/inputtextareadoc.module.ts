import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AutoResizeDocComponent } from './autoresizedoc';
import { BasicDocComponent } from './basicdoc';
import { DisabledDocComponent } from './disableddoc';
import { EventsDocComponent } from './eventsdoc';
import { FloatlabelDocComponent } from './floatlabeldoc';
import { ImportDocComponent } from './importdoc';
import { KeyfilterDocComponent } from './keyfilterdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, InputTextModule, FormsModule, InputTextareaModule, AppDocModule, KeyFilterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, AutoResizeDocComponent, FloatlabelDocComponent, DisabledDocComponent, KeyfilterDocComponent, PropsDocComponent, EventsDocComponent, StyleDocComponent]
})
export class InputtextareaDocModule {}
