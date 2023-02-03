import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TimelineDemo } from './timelinedemo';
import { TimelineDemoRoutingModule } from './timelinedemo-routing.module';

@NgModule({
    imports: [CommonModule, TimelineDemoRoutingModule, TimelineModule, CardModule, ButtonModule, SplitButtonModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [TimelineDemo]
})
export class TimelineDemoModule {}
