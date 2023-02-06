import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockUIModule } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { BlockUIDocModule } from '../../doc/blockui/blockuidoc.module';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { BlockUIDemo } from './blockuidemo';
import { BlockUIDemoRoutingModule } from './blockuidemo-routing.module';

@NgModule({
    imports: [CommonModule, BlockUIDemoRoutingModule, BlockUIModule, ButtonModule, PanelModule, TabViewModule, AppCodeModule, AppDemoActionsModule, BlockUIDocModule, AppDocModule],
    declarations: [BlockUIDemo]
})
export class BlockUIDemoModule {}
