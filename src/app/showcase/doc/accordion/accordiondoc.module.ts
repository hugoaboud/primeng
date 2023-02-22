import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ControlledDocComponent } from './controlleddoc';
import { DisabledDocComponent } from './disableddoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { MultipleDocComponent } from './multipledoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TemplateDocComponent } from './templatedoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, AccordionModule, ButtonModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, MultipleDocComponent, DisabledDocComponent, ControlledDocComponent, TemplateDocComponent, StyleDocComponent, PropsDocComponent, EventsDocComponent, TemplatesDocComponent]
})
export class AccordionDocModule {}
