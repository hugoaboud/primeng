import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ControlledDocComponent } from './controlleddoc';
import { DisabledDocComponent } from './disableddoc';
import { CustomTemplateDocComponent } from './customtemplatedoc';
import { ImportDocComponent } from './importdoc';
import { ClosableDocComponent } from './closabledoc';
import { ScrollableDocComponent } from './scrollabledoc';
import { StyleDocComponent } from './styledoc';
import { PropsDocComponent } from './propsdoc';
import { EventsDocComponent } from './eventsdoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, TabViewModule, RouterModule, ButtonModule],
    exports: [AppDocModule],
    declarations: [
        ImportDocComponent,
        BasicDocComponent,
        ControlledDocComponent,
        DisabledDocComponent,
        CustomTemplateDocComponent,
        ClosableDocComponent,
        ScrollableDocComponent,
        StyleDocComponent,
        PropsDocComponent,
        EventsDocComponent,
        TemplatesDocComponent
    ]
})
export class TabViewDocModule {}
