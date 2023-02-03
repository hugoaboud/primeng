import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ChipDemo } from './chipdemo';
import { ChipDemoRoutingModule } from './chipdemo-routing.module';

@NgModule({
    imports: [CommonModule, ChipDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, ChipModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ChipDemo]
})
export class ChipDemoModule {}
