import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { DropdownDemo } from './dropdowndemo';
import { DropdownDemoRoutingModule } from './dropdowndemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, DropdownDemoRoutingModule, DropdownModule, TabViewModule, SkeletonModule, AppDemoActionsModule, AppCodeModule],
    declarations: [DropdownDemo]
})
export class DropdownDemoModule {}
