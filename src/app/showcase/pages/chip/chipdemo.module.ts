import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipDocModule } from '../../doc/chip/chipdoc.module';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { ChipDemo } from './chipdemo';
import { ChipDemoRoutingModule } from './chipdemo-routing.module';

@NgModule({
    imports: [CommonModule, ChipDemoRoutingModule, ChipDocModule, AppDocModule],
    declarations: [ChipDemo]
})
export class ChipDemoModule {}
