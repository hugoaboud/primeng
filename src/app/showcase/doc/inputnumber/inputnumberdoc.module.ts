import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ButtonsDocComponent } from './buttonsdoc';
import { CurrencyDocComponent } from './currencydoc';
import { DisabledDocComponent } from './disableddoc';
import { EventsDocComponent } from './eventsdoc';
import { FloatlabelDocComponent } from './floatlabeldoc';
import { ImportDocComponent } from './importdoc';
import { InvalidDocComponent } from './invaliddoc';
import { LocaleDocComponent } from './localedoc';
import { MethodsDocComponent } from './methodsdoc';
import { NumeralsDocComponent } from './numeralsdoc';
import { PrefixSuffixDocComponent } from './prefixsuffixdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { VerticalDocComponent } from './verticaldoc';

@NgModule({
    imports: [CommonModule, FormsModule, InputNumberModule, RouterModule, AppCodeModule, AppDocModule],
    exports: [AppDocModule],
    declarations: [
        ImportDocComponent,
        NumeralsDocComponent,
        LocaleDocComponent,
        CurrencyDocComponent,
        PrefixSuffixDocComponent,
        ButtonsDocComponent,
        VerticalDocComponent,
        FloatlabelDocComponent,
        InvalidDocComponent,
        DisabledDocComponent,
        PropsDocComponent,
        MethodsDocComponent,
        EventsDocComponent,
        StyleDocComponent
    ]
})
export class InputNumberDocModule {}
