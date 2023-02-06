import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { ChipDocModule } from '../../doc/chip/chipdoc.module';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { ChipDemo } from './chipdemo';
import { ChipDemoRoutingModule } from './chipdemo-routing.module';

@NgModule({
    imports: [CommonModule, ChipDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, ChipModule, AppDemoActionsModule, AppCodeModule, ChipDocModule, AppDocModule],
    declarations: [ChipDemo]
})
export class ChipDemoModule {}
