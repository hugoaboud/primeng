import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ChipsDemo } from './chipsdemo';
import { ChipsDemoRoutingModule } from './chipsdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, ChipsDemoRoutingModule, ChipsModule, ButtonModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ChipsDemo]
})
export class ChipsDemoModule {}
