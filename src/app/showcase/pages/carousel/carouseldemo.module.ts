import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { CarouselDemo } from './carouseldemo';
import { CarouselDemoRoutingModule } from './carouseldemo-routing.module';

@NgModule({
    imports: [CommonModule, CarouselDemoRoutingModule, CarouselModule, ButtonModule, ToastModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [CarouselDemo]
})
export class CarouselDemoModule {}
