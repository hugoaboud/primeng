import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ButtonDemo } from './buttondemo';
import { ButtonDemoRoutingModule } from './buttondemo-routing.module';

@NgModule({
    imports: [CommonModule, ButtonDemoRoutingModule, ButtonModule, TabViewModule, AppCodeModule, ProgressSpinnerModule, AppDemoActionsModule, RippleModule],
    declarations: [ButtonDemo]
})
export class ButtonDemoModule {}
