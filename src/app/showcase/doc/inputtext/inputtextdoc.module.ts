import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
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
import { SizesDocComponent } from './sizesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, InputTextModule, FormsModule, AppDocModule],
    declarations: [BasicDocComponent, DisabledDocComponent, FloatLabelDocComponent, HelpTextDocComponent, IconsDocComponent, InvalidDocComponent, KeyFilterDocComponent, SizesDocComponent, ImportDocComponent],
    exports: [BasicDocComponent, DisabledDocComponent, FloatLabelDocComponent, HelpTextDocComponent, IconsDocComponent, InvalidDocComponent, KeyFilterDocComponent, SizesDocComponent]
})
export class InputtextDocModule {}
