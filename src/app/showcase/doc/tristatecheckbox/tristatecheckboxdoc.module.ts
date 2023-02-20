import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { DisabledDocComponent } from './disableddoc';
import { PropsDocComponent } from './propsdoc';
import { EventsDocComponent } from './eventsdoc';
import { StyleDocComponent } from './styledoc';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, TriStateCheckboxModule, FormsModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, DisabledDocComponent, PropsDocComponent, EventsDocComponent, StyleDocComponent]
})
export class TristatecheckboxDocModule {}
