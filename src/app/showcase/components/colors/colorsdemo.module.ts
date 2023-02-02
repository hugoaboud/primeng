import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ColorsDemoRoutingModule } from './colors-routing.module';
import { ColorsDemoComponent } from './colors.component';

@NgModule({
    imports: [CommonModule, AppCodeModule, ColorsDemoRoutingModule],
    declarations: [ColorsDemoComponent]
})
export class ColorsDemoModule {}
