import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { BadgeDemo } from './badgedemo';
import { BadgeDemoRoutingModule } from './badgedemo-routing.module';

@NgModule({
    imports: [CommonModule, BadgeDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, BadgeModule, AppDemoActionsModule, AppCodeModule],
    declarations: [BadgeDemo]
})
export class BadgeDemoModule {}
