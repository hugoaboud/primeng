import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TabViewDemo } from './tabviewdemo';
import { TabViewDemoRoutingModule } from './tabviewdemo-routing.module';

@NgModule({
    imports: [CommonModule, TabViewDemoRoutingModule, TabViewModule, AppCodeModule, ButtonModule, AppDemoActionsModule],
    declarations: [TabViewDemo]
})
export class TabViewDemoModule {}
