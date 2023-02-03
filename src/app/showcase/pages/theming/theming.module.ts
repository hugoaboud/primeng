import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { ThemingRoutingModule } from './theming-routing.module';
import { ThemingComponent } from './theming.component';

@NgModule({
    imports: [CommonModule, ThemingRoutingModule, AppCodeModule],
    declarations: [ThemingComponent]
})
export class ThemingModule {}
