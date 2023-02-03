import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { InputMaskDemo } from './inputmaskdemo';
import { InputMaskDemoRoutingModule } from './inputmaskdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, InputMaskDemoRoutingModule, InputMaskModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [InputMaskDemo]
})
export class InputMaskDemoModule {}
