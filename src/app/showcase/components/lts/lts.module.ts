import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { LTSRoutingModule } from './lts-routing.module';
import { LTSComponent } from './lts.component';

@NgModule({
    imports: [CommonModule, LTSRoutingModule, AccordionModule, AppCodeModule],
    declarations: [LTSComponent]
})
export class LTSModule {}
