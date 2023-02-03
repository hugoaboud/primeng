import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { AvatarDemo } from './avatardemo';
import { AvatarDemoRoutingModule } from './avatardemo-routing.module';

@NgModule({
    imports: [CommonModule, AvatarDemoRoutingModule, AccordionModule, ButtonModule, TabViewModule, ToastModule, AvatarModule, AvatarGroupModule, BadgeModule, AppDemoActionsModule, AppCodeModule],
    declarations: [AvatarDemo]
})
export class AvatarDemoModule {}
