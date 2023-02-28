import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FieldsetModule } from 'primeng/fieldset';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { FieldsetBasicDemo } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { FieldsetTemplateDemo } from './templatedoc';
import { TemplatesDocComponent } from './templatesdoc';
import { FieldsetToggleableDemo } from './toggleabledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, FieldsetModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, FieldsetBasicDemo, FieldsetToggleableDemo, FieldsetTemplateDemo, StyleDocComponent, PropsDocComponent, EventsDocComponent, TemplatesDocComponent]
})
export class FieldsetDocModule {}
