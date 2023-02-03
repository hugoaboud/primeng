import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { MultiSelectDemo } from './multiselectdemo';
import { MultiSelectDemoRoutingModule } from './multiselectdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, MultiSelectDemoRoutingModule, MultiSelectModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [MultiSelectDemo]
})
export class MultiSelectDemoModule {}
