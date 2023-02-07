import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { ChipsDocModule } from '../../doc/chips/chipsdoc.module';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { ChipsDemo } from './chipsdemo';
import { ChipsDemoRoutingModule } from './chipsdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, ChipsDemoRoutingModule, ChipsModule, ButtonModule, AppDemoActionsModule, AppDocModule, ChipsDocModule],
    declarations: [ChipsDemo]
})
export class ChipsDemoModule {}
