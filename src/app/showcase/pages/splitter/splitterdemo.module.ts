import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { SplitterDemo } from './splitterdemo';
import { SplitterDemoRoutingModule } from './splitterdemo-routing.module';

@NgModule({
    imports: [CommonModule, SplitterDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, SplitterModule, AppCodeModule, AppDemoActionsModule],
    declarations: [SplitterDemo]
})
export class SplitterDemoModule {}
