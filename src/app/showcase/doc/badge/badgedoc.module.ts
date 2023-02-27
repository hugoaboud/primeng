import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ImportDocComponent } from './importdoc';
import { BadgeBasicDemo } from './basicdoc';
import { BadgeButtonDemo } from './buttondoc';
import { BadgeDirectiveDemo } from './directivedoc';
import { BadgePositionDemo } from './positiondoc';
import { BadgeSeverityDemo } from './severitydoc';
import { BadgeSizeDemo } from './sizedoc';
import { StyleDocComponent } from './styledoc';
import { PropsDocComponent } from './propsdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, BadgeModule, ButtonModule],
    declarations: [ImportDocComponent, BadgeBasicDemo, BadgeButtonDemo, BadgeDirectiveDemo, BadgePositionDemo, BadgeSeverityDemo, BadgeSizeDemo, StyleDocComponent, PropsDocComponent],
    exports: [AppDocModule]
})
export class BadgeDocModule {}
