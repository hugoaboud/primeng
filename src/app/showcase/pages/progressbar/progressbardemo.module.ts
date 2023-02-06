import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressBarDocModule } from '../../doc/progressbar/progressbardoc.module';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { ProgressBarDemo } from './progressbardemo';
import { ProgressBarDemoRoutingModule } from './progressbardemo-routing.module';

@NgModule({
    imports: [CommonModule, ProgressBarDemoRoutingModule, AppDocModule, ProgressBarDocModule],
    declarations: [ProgressBarDemo]
})
export class ProgressBarDemoModule {}
