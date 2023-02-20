import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TreeSelectModule } from 'primeng/treeselect';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { CheckboxDocComponent } from './checkboxdoc';
import { DisabledDocComponent } from './disableddoc';
import { EventsDocComponent } from './eventsdoc';
import { FilterDocComponent } from './filterdoc';
import { FloatLabelDocComponent } from './floatlabeldoc';
import { ImportDocComponent } from './importdoc';
import { InvalidDocComponent } from './invaliddoc';
import { MultipleDocComponent } from './multipledoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, TreeSelectModule, FormsModule, RouterModule],
    exports: [AppDocModule],
    declarations: [
        ImportDocComponent,
        BasicDocComponent,
        MultipleDocComponent,
        CheckboxDocComponent,
        FilterDocComponent,
        FloatLabelDocComponent,
        InvalidDocComponent,
        DisabledDocComponent,
        PropsDocComponent,
        EventsDocComponent,
        TemplatesDocComponent,
        StyleDocComponent
    ]
})
export class TreeSelectDocModule {}
