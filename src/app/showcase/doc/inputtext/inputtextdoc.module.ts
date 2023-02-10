import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { DisabledDocComponent } from './disableddoc';
import { FloatLabelDocComponent } from './floatlabeldoc';
import { HelpTextDocComponent } from './helptextdoc';
import { IconsDocComponent } from './iconsdoc';
import { ImportDocComponent } from './importdoc';
import { InvalidDocComponent } from './invaliddoc';
import { KeyFilterDocComponent } from './keyfilterdoc';
import { PropsDocComponent } from './propsdoc';
import { SizesDocComponent } from './sizesdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, InputTextModule, FormsModule, AppDocModule, KeyFilterModule],
    declarations: [BasicDocComponent, DisabledDocComponent, FloatLabelDocComponent, HelpTextDocComponent, IconsDocComponent, InvalidDocComponent, KeyFilterDocComponent, SizesDocComponent, ImportDocComponent, PropsDocComponent, StyleDocComponent],
    exports: [ImportDocComponent, BasicDocComponent, DisabledDocComponent, FloatLabelDocComponent, HelpTextDocComponent, IconsDocComponent, InvalidDocComponent, KeyFilterDocComponent, SizesDocComponent, PropsDocComponent, StyleDocComponent]
})
export class InputtextDocModule {}
