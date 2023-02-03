import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayModule } from 'primeng/overlay';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { OverlayDemo } from './overlaydemo';
import { OverlayDemoRoutingModule } from './overlaydemo-routing.module';

@NgModule({
    imports: [CommonModule, OverlayDemoRoutingModule, OverlayModule, AppCodeModule, AppDemoActionsModule],
    declarations: [OverlayDemo]
})
export class OverlayDemoModule {}
