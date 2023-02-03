import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { DividerDemo } from './dividerdemo';
import { TagDemoRoutingModule } from './dividerdemo-routing.module';

@NgModule({
    imports: [CommonModule, TagDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, DividerModule, InputTextModule, AppCodeModule, AppDemoActionsModule],
    declarations: [DividerDemo]
})
export class DividerDemoModule {}
