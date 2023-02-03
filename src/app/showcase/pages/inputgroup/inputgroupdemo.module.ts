import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { InputGroupDemo } from './inputgroupdemo';
import { InputGroupDemoRoutingModule } from './inputgroupdemo-routing.module';

@NgModule({
    imports: [CommonModule, InputGroupDemoRoutingModule, FormsModule, InputTextModule, ButtonModule, CheckboxModule, RadioButtonModule, RippleModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [InputGroupDemo]
})
export class InputGroupDemoModule {}
