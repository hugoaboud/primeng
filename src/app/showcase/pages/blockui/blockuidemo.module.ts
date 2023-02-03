import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockUIModule } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { BlockUIDemo } from './blockuidemo';
import { BlockUIDemoRoutingModule } from './blockuidemo-routing.module';

@NgModule({
    imports: [CommonModule, BlockUIDemoRoutingModule, BlockUIModule, ButtonModule, PanelModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [BlockUIDemo]
})
export class BlockUIDemoModule {}
