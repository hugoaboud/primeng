import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TieredMenuDemo } from './tieredmenudemo';
import { TieredMenuDemoRoutingModule } from './tieredmenudemo-routing.module';

@NgModule({
    imports: [CommonModule, TieredMenuDemoRoutingModule, TieredMenuModule, ButtonModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [TieredMenuDemo]
})
export class TieredMenuDemoModule {}
