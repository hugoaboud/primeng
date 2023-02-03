import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ImageDemo } from './imagedemo';
import { ImageDemoRoutingModule } from './imagedemo-routing.module';

@NgModule({
    imports: [CommonModule, ImageDemoRoutingModule, ButtonModule, TabViewModule, AppCodeModule, ImageModule, AppDemoActionsModule],
    declarations: [ImageDemo]
})
export class ImageDemoModule {}
