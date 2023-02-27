import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChipModule } from 'primeng/chip';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ChipBasicDemo } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { ChipIconDemo } from './icondoc';
import { ChipImageDemo } from './imagedoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { ChipTemplatingDemo } from './templatingdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ChipModule],
    declarations: [ImportDocComponent, ChipBasicDemo, ChipIconDemo, ChipImageDemo, PropsDocComponent, StyleDocComponent, ChipTemplatingDemo, EventsDocComponent],
    exports: [AppDocModule]
})
export class ChipDocModule {}
