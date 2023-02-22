import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { DisabledDocComponent } from './disableddoc';
import { EventsDocComponent } from './eventsdoc';
import { FloatLabelDocComponent } from './floatlabeldoc';
import { ImportDocComponent } from './importdoc';
import { InvalidDocComponent } from './invaliddoc';
import { MeterDocComponent } from './meterdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TemplateDocComponent } from './templatedoc';
import { TemplatesDocComponent } from './templatesdoc';
import { TogglemaskDocComponent } from './togglemaskdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, PasswordModule, FormsModule, DividerModule, RouterModule],
    exports: [AppDocModule],
    declarations: [
        ImportDocComponent,
        BasicDocComponent,
        MeterDocComponent,
        TogglemaskDocComponent,
        TemplateDocComponent,
        FloatLabelDocComponent,
        InvalidDocComponent,
        DisabledDocComponent,
        PropsDocComponent,
        EventsDocComponent,
        TemplatesDocComponent,
        StyleDocComponent
    ]
})
export class PasswordDocModule {}
