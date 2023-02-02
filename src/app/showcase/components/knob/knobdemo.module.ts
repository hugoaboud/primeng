import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { KnobDemo } from './knobdemo';
import { KnobDemoRoutingModule } from './knobdemo-routing.module';

@NgModule({
    imports: [CommonModule, KnobDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, FormsModule, KnobModule, AppDemoActionsModule, AppCodeModule],
    declarations: [KnobDemo]
})
export class KnobDemoModule {}
