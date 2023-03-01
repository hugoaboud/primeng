import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { PresetsDocComponent } from './presetsdoc';
import { PropsDocComponent } from './propsdoc';
import { RegexDocComponent } from './regexdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, KeyFilterModule, InputTextModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, PresetsDocComponent, RegexDocComponent, PropsDocComponent]
})
export class KeyFilterDocModule {}
