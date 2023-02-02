import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { SlideMenuDemo } from './slidemenudemo';
import { SlideMenuDemoRoutingModule } from './slidemenudemo-routing.module';

@NgModule({
    imports: [CommonModule, SlideMenuDemoRoutingModule, SlideMenuModule, ButtonModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [SlideMenuDemo]
})
export class SlideMenuDemoModule {}
