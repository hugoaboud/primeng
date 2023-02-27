import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { StyleDocComponent } from './styledoc';
import { BasicDocComponent } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { TemplateDocComponent } from './templatedoc';
import { ToggleableDocComponent } from './toggleabledoc';
import { PropsDocComponent } from './propsdoc';
import { EventsDocComponent } from './eventsdoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, PanelModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, ToggleableDocComponent, TemplateDocComponent, StyleDocComponent, PropsDocComponent, EventsDocComponent, TemplatesDocComponent]
})
export class PanelDocModule {}
