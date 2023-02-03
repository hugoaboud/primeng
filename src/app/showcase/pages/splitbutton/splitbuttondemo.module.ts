import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { SplitButtonDemo } from './splitbuttondemo';
import { SplitButtonDemoRoutingModule } from './splitbuttondemo-routing.module';

@NgModule({
    imports: [CommonModule, SplitButtonDemoRoutingModule, SplitButtonModule, ToastModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [SplitButtonDemo]
})
export class SplitButtonDemoModule {}
