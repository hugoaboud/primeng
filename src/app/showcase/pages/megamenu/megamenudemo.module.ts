import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MegaMenuModule } from 'primeng/megamenu';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { MegaMenuDemo } from './megamenudemo';
import { MegaMenuDemoRoutingModule } from './megamenudemo-routing.module';

@NgModule({
    imports: [CommonModule, MegaMenuDemoRoutingModule, MegaMenuModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [MegaMenuDemo]
})
export class MegaMenuDemoModule {}
