import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { TemplateDocComponent } from './templatedoc';
import { GroupedDocComponent } from './groupeddoc';
import { VirtualScrollDocComponent } from './virtualscrolldoc';
import { MultipleDocComponent } from './multipledoc';
import { StyleDocComponent } from './styledoc';
import { PropsDocComponent } from './propsdoc';
import { EventsDocComponent } from './eventsdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, FormsModule, AppDocModule, AutoCompleteModule],
    exports: [AppDocModule, ImportDocComponent, BasicDocComponent, TemplateDocComponent, GroupedDocComponent, VirtualScrollDocComponent, MultipleDocComponent, StyleDocComponent, PropsDocComponent, EventsDocComponent],
    declarations: [ImportDocComponent, BasicDocComponent, TemplateDocComponent, GroupedDocComponent, VirtualScrollDocComponent, MultipleDocComponent, StyleDocComponent, PropsDocComponent, EventsDocComponent]
})
export class AutoCompleteDocModule {}
