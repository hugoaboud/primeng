import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { InputTextareaDemo } from './inputtextareademo';
import { InputTextareaDemoRoutingModule } from './inputtextareademo-routing.module';

@NgModule({
    imports: [CommonModule, InputTextareaDemoRoutingModule, InputTextareaModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [InputTextareaDemo]
})
export class InputTextareaDemoModule {}
