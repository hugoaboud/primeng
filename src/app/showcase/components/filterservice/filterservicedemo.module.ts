import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { FilterServiceDemoRoutingModule } from './filterservice-routing.module';
import { FilterServiceDemo } from './filterservicedemo';

@NgModule({
    imports: [CommonModule, FilterServiceDemoRoutingModule, ButtonModule, TabViewModule, AppCodeModule, AutoCompleteModule, FormsModule, TableModule, InputTextModule, AppDemoActionsModule],
    declarations: [FilterServiceDemo]
})
export class FilterServiceDemoModule {}
