import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PickListModule } from 'primeng/picklist';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { PickListDemo } from './picklistdemo';
import { PickListDemoRoutingModule } from './picklistdemo-routing.module';

@NgModule({
    imports: [CommonModule, PickListDemoRoutingModule, PickListModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [PickListDemo]
})
export class PickListDemoModule {}
