import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { CheckboxDemo } from './checkboxdemo';
import { CheckboxDemoRoutingModule } from './checkboxdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, CheckboxDemoRoutingModule, CheckboxModule, AppDemoActionsModule, TabViewModule, AppCodeModule],
    declarations: [CheckboxDemo]
})
export class CheckboxDemoModule {}
