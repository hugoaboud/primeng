import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { CommaSeperatorDocComponent } from './commaseperator.doc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { RegexpSeperatorDocComponent } from './regexpseperator.doc';
import { StyleDocComponent } from './styledoc';
import { TemplateDocComponent } from './templatedoc';

@NgModule({
    imports: [CommonModule, ChipsModule, FormsModule, AppCodeModule, AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, CommaSeperatorDocComponent, RegexpSeperatorDocComponent, TemplateDocComponent, StyleDocComponent, PropsDocComponent],
    exports: [ImportDocComponent, BasicDocComponent, CommaSeperatorDocComponent, RegexpSeperatorDocComponent, TemplateDocComponent, StyleDocComponent, PropsDocComponent]
})
export class ChipsDocModule {}
