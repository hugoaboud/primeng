import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BadgesDocComponent } from './badgesdoc';
import { BasicDocComponent } from './basicdoc';
import { ButtonsetDocComponent } from './buttonsetdoc';
import { DisabledDocComponent } from './disableddoc';
import { IconsDocComponent } from './iconsdoc';
import { IconOnlyDocComponent } from './iconsonlydoc';
import { ImportDocComponent } from './importdoc';
import { LinkDocComponent } from './linkdoc';
import { LoadingDocComponent } from './loadingdoc';
import { OutlinedDocComponent } from './outlineddoc';
import { PropsDocComponent } from './propsdoc';
import { RaisedDocComponent } from './raiseddoc';
import { RaisedTextDocComponent } from './raisedtextdoc';
import { RoundedDocComponent } from './roundeddoc';
import { SeverityDocComponent } from './severitydoc';
import { SizesDocComponent } from './sizesdoc';
import { StyleDocComponent } from './styledoc';
import { TemplateDocComponent } from './templatedoc';
import { TemplatesDocComponent } from './templatesdoc';
import { TextDocComponent } from './textdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, ButtonModule, RouterModule],
    exports: [AppDocModule],
    declarations: [
        ImportDocComponent,
        BasicDocComponent,
        LinkDocComponent,
        IconsDocComponent,
        LoadingDocComponent,
        SeverityDocComponent,
        DisabledDocComponent,
        RaisedDocComponent,
        RoundedDocComponent,
        TextDocComponent,
        RaisedTextDocComponent,
        OutlinedDocComponent,
        IconOnlyDocComponent,
        BadgesDocComponent,
        ButtonsetDocComponent,
        SizesDocComponent,
        TemplateDocComponent,
        StyleDocComponent,
        PropsDocComponent,
        TemplatesDocComponent
    ]
})
export class ButtonDocModule {}
