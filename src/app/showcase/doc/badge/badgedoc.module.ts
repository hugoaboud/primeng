import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { ButtonDocComponent } from './buttondoc';
import { DirectiveDocComponent } from './directivedoc';
import { PositionDocComponent } from './positiondoc';
import { SeverityDocComponent } from './severitydoc';
import { SizeDocComponent } from './sizedoc';
import { StyleDocComponent } from './styledoc';
import { PropsDocComponent } from './propsdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, BadgeModule, ButtonModule],
    declarations: [ImportDocComponent, BasicDocComponent, ButtonDocComponent, DirectiveDocComponent, PositionDocComponent, SeverityDocComponent, SizeDocComponent, StyleDocComponent, PropsDocComponent],
    exports: [ImportDocComponent, BasicDocComponent, ButtonDocComponent, DirectiveDocComponent, PositionDocComponent, SeverityDocComponent, SizeDocComponent, StyleDocComponent, PropsDocComponent]
})
export class BadgeDocModule {}
