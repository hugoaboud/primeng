import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { DisabledDocComponent } from './disableddoc';
import { PreselectionDocComponent } from './preselectiondoc';
import { PropsDocComponent } from './propsdoc';
import { EventsDocComponent } from './eventsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, InputSwitchModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, PreselectionDocComponent, DisabledDocComponent, PropsDocComponent, EventsDocComponent, StyleDocComponent]
})
export class InputSwitchDocModule {}
