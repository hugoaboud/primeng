import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import { ChipsDocModule } from '../../doc/chips/chipsdoc.module';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { ChipsDemo } from './chipsdemo';
import { ChipsDemoRoutingModule } from './chipsdemo-routing.module';

@NgModule({
    imports: [CommonModule, ChipsDemoRoutingModule, ChipsModule, AppDocModule, ChipsDocModule],
    declarations: [ChipsDemo]
})
export class ChipsDemoModule {}
