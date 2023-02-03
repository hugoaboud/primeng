import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { RadioButtonDemo } from './radiobuttondemo';
import { RadioButtonDemoRoutingModule } from './radiobuttondemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, RadioButtonDemoRoutingModule, RadioButtonModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [RadioButtonDemo]
})
export class RadioButtonDemoModule {}
