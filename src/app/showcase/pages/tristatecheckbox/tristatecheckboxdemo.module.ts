import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TriStateCheckboxDemo } from './tristatecheckboxdemo';
import { TriStateCheckboxDemoRoutingModule } from './tristatecheckboxdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, TriStateCheckboxDemoRoutingModule, TriStateCheckboxModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [TriStateCheckboxDemo]
})
export class TriStateCheckboxDemoModule {}
