import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ArchitectureDocComponent } from './architecturedoc';
import { CSSVariablesDocComponent } from './cssvariablesdoc';
import { DesignerDocComponent } from './designerdoc';
import { LocalStylingDocComponent } from './localstylingdoc';
import { PrimeFlexDocComponent } from './primeflexdoc';
import { ScalingDocComponent } from './scalingdoc';
import { ThemesDocComponent } from './themesdoc';
import { UtilsDocComponent } from './utilsdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ButtonModule],
    declarations: [ArchitectureDocComponent, CSSVariablesDocComponent, DesignerDocComponent, LocalStylingDocComponent, PrimeFlexDocComponent, ScalingDocComponent, ThemesDocComponent, UtilsDocComponent],
    exports: [AppDocModule]
})
export class ThemingDocModule {}
