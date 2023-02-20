import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { InputDocComponent } from './inputdoc';
import { PropsDocComponent } from './propsdoc';
import { RangeDocComponent } from './rangedoc';
import { StepDocComponent } from './stepdoc';
import { StyleDocComponent } from './styledoc';
import { VerticalDocComponent } from './verticaldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, FormsModule, SliderModule, AppDocModule, InputTextModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, InputDocComponent, StepDocComponent, RangeDocComponent, VerticalDocComponent, StyleDocComponent, PropsDocComponent, EventsDocComponent]
})
export class SliderDocModule {}
