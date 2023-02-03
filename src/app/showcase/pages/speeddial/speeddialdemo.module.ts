import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { SpeedDialModule } from 'primeng/speeddial';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { SpeedDialDemo } from './speeddialdemo';
import { SpeedDialDemoRoutingModule } from './speeddialdemo-routing.module';

@NgModule({
    imports: [CommonModule, SpeedDialDemoRoutingModule, TabViewModule, AppCodeModule, ProgressSpinnerModule, AppDemoActionsModule, SpeedDialModule, ToastModule, RippleModule],
    declarations: [SpeedDialDemo]
})
export class SpeedDialDemoModule {}
