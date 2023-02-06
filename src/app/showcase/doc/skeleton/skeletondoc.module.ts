import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { CardDocComponent } from './carddoc';
import { DataTableDocComponent } from './datatabledoc';
import { ImportDocComponent } from './importdoc';
import { ListDocComponent } from './listdoc';
import { PropsDocComponent } from './propsdoc';
import { ShapesDocComponent } from './shapesdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, TableModule, SkeletonModule],
    declarations: [CardDocComponent, DataTableDocComponent, ImportDocComponent, ListDocComponent, PropsDocComponent, ShapesDocComponent, StyleDocComponent],
    exports: [CardDocComponent, DataTableDocComponent, ImportDocComponent, ListDocComponent, PropsDocComponent, ShapesDocComponent, StyleDocComponent]
})
export class SkeletonDocModule {}
