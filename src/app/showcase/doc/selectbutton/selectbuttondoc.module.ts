import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { DisabledDocComponent } from './disableddoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { InvalidDocComponent } from './invaliddoc';
import { MultipleDocComponent } from './multipledoc';
import { PropsDocComponent } from './propsdoc';
import { TemplateDocComponent } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, SelectButtonModule, FormsModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, MultipleDocComponent, TemplateDocComponent, InvalidDocComponent, DisabledDocComponent, PropsDocComponent, EventsDocComponent]
})
export class SelectButtonDocModule {}
