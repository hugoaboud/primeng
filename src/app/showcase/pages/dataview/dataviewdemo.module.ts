import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { DataViewDemo } from './dataviewdemo';
import { DataViewDemoRoutingModule } from './dataviewdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, DataViewDemoRoutingModule, DataViewModule, PanelModule, DropdownModule, TabViewModule, InputTextModule, RatingModule, ButtonModule, AppDemoActionsModule, AppCodeModule],
    declarations: [DataViewDemo]
})
export class DataViewDemoModule {}
