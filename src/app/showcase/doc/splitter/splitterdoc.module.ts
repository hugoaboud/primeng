import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SplitterModule } from 'primeng/splitter';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { EventsDocComponent } from './eventsdoc';
import { SplitterHorizontalDemo } from './horizontaldoc';
import { ImportDocComponent } from './importdoc';
import { SplitterNestedDemo } from './nesteddoc';
import { PropsDocComponent } from './propsdoc';
import { SplitterSizeDemo } from './sizedoc';
import { StyleDocComponent } from './styledoc';
import { TemplatesDocComponent } from './templatesdoc';
import { SplitterVerticalDemo } from './verticaldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, SplitterModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, SplitterHorizontalDemo, SplitterSizeDemo, SplitterVerticalDemo, SplitterNestedDemo, StyleDocComponent, PropsDocComponent, EventsDocComponent, TemplatesDocComponent]
})
export class SplitterDocModule {}
