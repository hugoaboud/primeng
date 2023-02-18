import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { CustomDocComponent } from './customdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TemplatesDocComponent } from './templatesdoc';
import { PositionDocComponent } from './positiondoc';
import { FullScreenDocComponent } from './fullscreendoc';
import { SizeDocComponent } from './sizedoc';

@NgModule({
    imports: [CommonModule, FormsModule, AppCodeModule, RouterModule, SidebarModule, ButtonModule, AppDocModule],
    declarations: [BasicDocComponent, CustomDocComponent, EventsDocComponent, ImportDocComponent, PropsDocComponent, StyleDocComponent, TemplatesDocComponent, PositionDocComponent, FullScreenDocComponent, SizeDocComponent],
    exports: [AppDocModule]
})
export class SidebarDocModule {}
