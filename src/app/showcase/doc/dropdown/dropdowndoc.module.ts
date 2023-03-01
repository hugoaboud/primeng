import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { DropdownModule } from 'primeng/dropdown';
import { EditableDocComponent } from './editabledoc';
import { GroupDocComponent } from './groupdoc';
import { TemplateDocComponent } from './templatedoc';
import { DisabledDocComponent } from './disableddoc';
import { VirtualScrollDocComponent } from './virtualscrolldoc';
import { FilterDocComponent } from './filterdoc';
import { FloatLabelDocComponent } from './floatlabeldoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { EventsDocComponent } from './eventsdoc';
import { MethodsDocComponent } from './methodsdoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, DropdownModule],
    exports: [AppDocModule],
    declarations: [
        ImportDocComponent,
        BasicDocComponent,
        EditableDocComponent,
        GroupDocComponent,
        TemplateDocComponent,
        DisabledDocComponent,
        VirtualScrollDocComponent,
        FilterDocComponent,
        FloatLabelDocComponent,
        PropsDocComponent,
        StyleDocComponent,
        EventsDocComponent,
        MethodsDocComponent,
        TemplatesDocComponent
    ]
})
export class DropdownDocModule {}
