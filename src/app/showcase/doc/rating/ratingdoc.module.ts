import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { DisabledDocComponent } from './disableddoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { NumberOfStarsDocComponent } from './numberofstarsdoc';
import { PropsDocComponent } from './propsdoc';
import { ReadOnlyDocComponent } from './readonlydoc';
import { StyleDocComponent } from './styledoc';
import { TemplateDocComponent } from './templatedoc';
import { WithoutCancelDocComponent } from './withoutcanceldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, RatingModule, FormsModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, WithoutCancelDocComponent, NumberOfStarsDocComponent, TemplateDocComponent, ReadOnlyDocComponent, DisabledDocComponent, StyleDocComponent, PropsDocComponent, EventsDocComponent]
})
export class RatingDocModule {}
