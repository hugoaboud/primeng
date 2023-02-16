import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { MegaMenuItemDocComponent } from './megamenuitemdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { CustomDocComponent } from './customdoc';
import { TemplatesDocComponent } from './templatesdoc';
import { VerticalDocComponent } from './verticaldoc';
import { MegaMenuModule } from 'primeng/megamenu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MegaMenuModule, InputTextModule, ButtonModule, AppDocModule],
    declarations: [
        BasicDocComponent,
        EventsDocComponent,
        ImportDocComponent,
        MegaMenuItemDocComponent,
        PropsDocComponent,
        StyleDocComponent,
        CustomDocComponent,
        TemplatesDocComponent,
        VerticalDocComponent
    ],
    exports: [AppDocModule]
})
export class MegaMenuDocModule {}
