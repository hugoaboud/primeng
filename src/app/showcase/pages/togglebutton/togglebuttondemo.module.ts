import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ToggleButtonDemo } from './togglebuttondemo';
import { ToggleButtonDemoRoutingModule } from './togglebuttondemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, ToggleButtonDemoRoutingModule, ToggleButtonModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ToggleButtonDemo]
})
export class ToggleButtonDemoModule {}
