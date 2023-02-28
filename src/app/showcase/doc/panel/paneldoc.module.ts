import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { StyleDocComponent } from './styledoc';
import { PanelBasicDemo } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { PanelTemplateDemo } from './templatedoc';
import { PanelToggleableDemo } from './toggleabledoc';
import { PropsDocComponent } from './propsdoc';
import { EventsDocComponent } from './eventsdoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, PanelModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, PanelBasicDemo, PanelToggleableDemo, PanelTemplateDemo, StyleDocComponent, PropsDocComponent, EventsDocComponent, TemplatesDocComponent]
})
export class PanelDocModule {}
