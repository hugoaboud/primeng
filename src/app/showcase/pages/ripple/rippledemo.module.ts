import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { RippleDemo } from './rippledemo';
import { RippleDemoRoutingModule } from './rippledemo-routing.module';

@NgModule({
    imports: [CommonModule, RippleDemoRoutingModule, RippleModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [RippleDemo]
})
export class RippleDemoModule {}
