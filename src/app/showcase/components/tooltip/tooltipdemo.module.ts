import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TooltipDemo } from './tooltipdemo';
import { TooltipDemoRoutingModule } from './tooltipdemo-routing.module';

@NgModule({
    imports: [CommonModule, TooltipDemoRoutingModule, TooltipModule, InputTextModule, TabViewModule, AppCodeModule, ButtonModule, AppDemoActionsModule, RippleModule],
    declarations: [TooltipDemo]
})
export class TooltipDemoModule {}
