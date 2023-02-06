import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollTopDocModule } from '../../doc/scrolltop/scrolltopdoc.module';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { ScrollTopDemo } from './scrolltopdemo';
import { ScrollTopDemoRoutingModule } from './scrolltopdemo-routing.module';

@NgModule({
    imports: [CommonModule, ScrollTopDemoRoutingModule, ScrollTopDocModule, AppDocModule],
    declarations: [ScrollTopDemo]
})
export class ScrollTopDemoModule {}
