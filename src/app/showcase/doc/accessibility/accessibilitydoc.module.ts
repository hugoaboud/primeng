import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ColorsDocComponent } from './colorsdoc';
import { FormControlsDocComponent } from './formcontrolsdoc';
import { IntroductionDocComponent } from './introductiondoc';
import { SemanticHTMLDocComponent } from './semantichtmldoc';
import { WAIARIADocComponent } from './wai-ariadoc';
import { WCAGDocComponent } from './WCAGdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, RouterModule, FormsModule, CheckboxModule],
    exports: [AppDocModule],
    declarations: [ColorsDocComponent, FormControlsDocComponent, IntroductionDocComponent, SemanticHTMLDocComponent, WAIARIADocComponent, WCAGDocComponent]
})
export class AccessibilityDocModule {}
