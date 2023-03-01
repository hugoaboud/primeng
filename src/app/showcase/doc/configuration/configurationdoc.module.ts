import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AnimationsDocComponent } from './animationsdoc';
import { FilterModeDocComponent } from './filtermodedoc';
import { ImportDocComponent } from './importdoc';
import { RippleDocComponent } from './rippledoc';
import { ZIndexDocComponent } from './zindexdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, RouterModule],
    exports: [AppDocModule],
    declarations: [AnimationsDocComponent, FilterModeDocComponent, ImportDocComponent, RippleDocComponent, ZIndexDocComponent]
})
export class ConfigurationDocModule {}
