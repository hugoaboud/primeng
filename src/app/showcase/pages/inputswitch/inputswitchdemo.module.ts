import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { InputSwitchDemo } from './inputswitchdemo';
import { InputSwitchDemoRoutingModule } from './inputswitchdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, InputSwitchDemoRoutingModule, InputSwitchModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [InputSwitchDemo]
})
export class InputSwitchDemoModule {}
