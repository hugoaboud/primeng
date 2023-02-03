import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoFocusModule } from 'primeng/autofocus';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { AutoFocusDemoRoutingModule } from './autofocusdemo-routing.module';
import { AutoFocusDemo } from './autofocusdemo.component';

@NgModule({
    imports: [CommonModule, FormsModule, AppCodeModule, TabViewModule, AutoFocusModule, InputTextModule, AppDemoActionsModule, AutoFocusDemoRoutingModule],
    declarations: [AutoFocusDemo]
})
export class AutoFocusDemoModule {}
