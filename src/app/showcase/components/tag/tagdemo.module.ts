import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TagDemo } from './tagdemo';
import { TagDemoRoutingModule } from './tagdemo-routing.module';

@NgModule({
    imports: [CommonModule, TagDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, TagModule, AppCodeModule, AppDemoActionsModule],
    declarations: [TagDemo]
})
export class TagDemoModule {}
