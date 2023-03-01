import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { DisabledDocComponent } from './disableddoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { NestedDocComponent } from './nesteddoc';
import { OutlinedDocComponent } from './outlineddoc';
import { PropsDocComponent } from './propsdoc';
import { RaisedDocComponent } from './raiseddoc';
import { RaisedTextDocComponent } from './raisedtextdoc';
import { RoundedDocComponent } from './roundeddoc';
import { SeverityDocComponent } from './severitydoc';
import { SizesDocComponent } from './sizesdoc';
import { StyleDocComponent } from './styledoc';
import { TemplatesDocComponent } from './templatesdoc';
import { TextDocComponent } from './textdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, SplitButtonModule, ToastModule],
    exports: [AppDocModule],
    declarations: [
        ImportDocComponent,
        BasicDocComponent,
        NestedDocComponent,
        SeverityDocComponent,
        RaisedDocComponent,
        RoundedDocComponent,
        TextDocComponent,
        RaisedTextDocComponent,
        OutlinedDocComponent,
        SizesDocComponent,
        DisabledDocComponent,
        StyleDocComponent,
        PropsDocComponent,
        EventsDocComponent,
        TemplatesDocComponent
    ]
})
export class SplitButtonDocModule {}
