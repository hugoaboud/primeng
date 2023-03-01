import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListboxModule } from 'primeng/listbox';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { DisabledDocComponent } from './disableddoc';
import { EventsDocComponent } from './eventsdoc';
import { FilterDocComponent } from './filterdoc';
import { GroupDocComponent } from './groupdoc';
import { ImportDocComponent } from './importdoc';
import { InvalidDocComponent } from './invaliddoc';
import { MultipleDocComponent } from './multipledoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TemplateDocComponent } from './templatedoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, ListboxModule, FormsModule, AppDocModule],
    exports: [AppDocModule],
    declarations: [
        ImportDocComponent,
        BasicDocComponent,
        MultipleDocComponent,
        TemplateDocComponent,
        InvalidDocComponent,
        DisabledDocComponent,
        FilterDocComponent,
        GroupDocComponent,
        PropsDocComponent,
        EventsDocComponent,
        TemplatesDocComponent,
        StyleDocComponent
    ]
})
export class ListboxDocModule {}
