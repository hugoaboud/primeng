import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { InputNumberDemo } from './inputnumberdemo';
import { InputNumberDemoRoutingModule } from './inputnumberdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, InputNumberDemoRoutingModule, InputNumberModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [InputNumberDemo]
})
export class InputNumberDemoModule {}
