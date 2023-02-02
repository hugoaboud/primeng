import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ColorPickerDemo } from './colorpickerdemo';
import { ColorPickerDemoRoutingModule } from './colorpickerdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, ColorPickerDemoRoutingModule, ColorPickerModule, TabViewModule, AppDemoActionsModule, ButtonModule, AppCodeModule],
    declarations: [ColorPickerDemo]
})
export class ColorPickerDemoModule {}
