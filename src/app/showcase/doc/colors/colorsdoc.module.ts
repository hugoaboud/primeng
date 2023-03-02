import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { OverviewDocComponent } from './overviewdoc';
import { PaletteDocComponent } from './palettedoc';
import { SurfacesDocComponent } from './surfacesdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppDocModule, AppCodeModule],
    exports: [AppDocModule],
    declarations: [OverviewDocComponent, SurfacesDocComponent, PaletteDocComponent]
})
export class ColorsDocModule {}
