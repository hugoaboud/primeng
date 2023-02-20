import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MultiSelectModule } from 'primeng/multiselect';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ChipsDocComponent } from './chipsdoc';
import { DisabledDocComponent } from './disableddoc';
import { EventsDocComponent } from './eventsdoc';
import { FilterDocComponent } from './filterdoc';
import { FloatLabelDocComponent } from './floatlabeldoc';
import { GroupDocComponent } from './groupdoc';
import { ImportDocComponent } from './importdoc';
import { InvalidDocComponent } from './invaliddoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TemplateDocComponent } from './templatedoc';
import { TemplatesDocComponent } from './templatesdoc';
import { VirtualScrollDocComponent } from './virtualscrolldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MultiSelectModule, FormsModule, AppDocModule],
    exports: [
        AppDocModule,
        ImportDocComponent,
        BasicDocComponent,
        ChipsDocComponent,
        GroupDocComponent,
        FilterDocComponent,
        TemplateDocComponent,
        VirtualScrollDocComponent,
        FloatLabelDocComponent,
        InvalidDocComponent,
        DisabledDocComponent,
        StyleDocComponent,
        PropsDocComponent,
        EventsDocComponent,
        TemplatesDocComponent
    ],
    declarations: [
        ImportDocComponent,
        BasicDocComponent,
        ChipsDocComponent,
        GroupDocComponent,
        FilterDocComponent,
        TemplateDocComponent,
        VirtualScrollDocComponent,
        FloatLabelDocComponent,
        InvalidDocComponent,
        DisabledDocComponent,
        StyleDocComponent,
        PropsDocComponent,
        EventsDocComponent,
        TemplatesDocComponent
    ]
})
export class MultiSelectDocModule {}
