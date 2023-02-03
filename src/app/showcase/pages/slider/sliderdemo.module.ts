import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { SliderDemo } from './sliderdemo';
import { SliderDemoRoutingModule } from './sliderdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, SliderDemoRoutingModule, SliderModule, InputTextModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [SliderDemo]
})
export class SliderDemoModule {}
