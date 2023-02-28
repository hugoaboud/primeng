import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AccordionBasicDemo } from './basicdoc';
import { AccordionControlledDemo } from './controlleddoc';
import { AccordionDisabledDemo } from './disableddoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { AccordionMultipleDemo } from './multipledoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { AccordionTemplateDemo } from './templatedoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, AccordionModule, ButtonModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, AccordionBasicDemo, AccordionMultipleDemo, AccordionDisabledDemo, AccordionControlledDemo, AccordionTemplateDemo, StyleDocComponent, PropsDocComponent, EventsDocComponent, TemplatesDocComponent]
})
export class AccordionDocModule {}
