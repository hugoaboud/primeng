import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputMaskModule } from 'primeng/inputmask';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { DisabledDocComponent } from './disableddoc';
import { EventsDocComponent } from './eventsdoc';
import { FloatlabelDocComponent } from './floatlabeldoc';
import { ImportDocComponent } from './importdoc';
import { InvalidDocComponent } from './invaliddoc';
import { MaskDocComponent } from './maskdoc';
import { MethodsDocComponent } from './methodsdoc';
import { OptionalDocComponent } from './optionaldoc';
import { PropsDocComponent } from './propsdoc';
import { SlotCharDocComponent } from './slotchardoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, FormsModule, InputMaskModule, RouterModule, AppCodeModule, AppDocModule],
    exports: [AppDocModule],
    declarations: [
        ImportDocComponent,
        BasicDocComponent,
        MaskDocComponent,
        SlotCharDocComponent,
        OptionalDocComponent,
        FloatlabelDocComponent,
        DisabledDocComponent,
        InvalidDocComponent,
        PropsDocComponent,
        EventsDocComponent,
        MethodsDocComponent,
        StyleDocComponent
    ]
})
export class InputMaskDocModule {}
