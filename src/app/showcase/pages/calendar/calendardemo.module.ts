import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { CalendarDemo } from './calendardemo';
import { CalendarDemoRoutingModule } from './calendardemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, CalendarDemoRoutingModule, CalendarModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [CalendarDemo]
})
export class CalendarDemoModule {}
