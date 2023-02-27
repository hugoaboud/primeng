import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SplitterModule } from 'primeng/splitter';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { EventsDocComponent } from './eventsdoc';
import { HorizontalDocComponent } from './horizontaldoc';
import { ImportDocComponent } from './importdoc';
import { NestedDocComponent } from './nesteddoc';
import { PropsDocComponent } from './propsdoc';
import { SizeDocComponent } from './sizedoc';
import { StyleDocComponent } from './styledoc';
import { TemplatesDocComponent } from './templatesdoc';
import { VerticalDocComponent } from './verticaldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, SplitterModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, HorizontalDocComponent, SizeDocComponent, VerticalDocComponent, NestedDocComponent, StyleDocComponent, PropsDocComponent, EventsDocComponent, TemplatesDocComponent]
})
export class SplitterDocModule {}
