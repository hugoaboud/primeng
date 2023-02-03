import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { SelectButtonDemo } from './selectbuttondemo';
import { SelectButtonDemoRoutingModule } from './selectbuttondemo-routing.module';

@NgModule({
    imports: [CommonModule, SelectButtonDemoRoutingModule, FormsModule, SelectButtonModule, ButtonModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [SelectButtonDemo]
})
export class SelectButtonDemoModule {}
