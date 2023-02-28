import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { CardAdvancedDemo } from './advanceddoc';
import { CardBasicDemo } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, CardModule, ButtonModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, CardBasicDemo, CardAdvancedDemo, StyleDocComponent, PropsDocComponent, TemplatesDocComponent]
})
export class CardDocModule {}
