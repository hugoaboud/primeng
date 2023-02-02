import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ToolbarDemo } from './toolbardemo';
import { ToolbarDemoRoutingModule } from './toolbardemo-routing.module';

@NgModule({
    imports: [CommonModule, ToolbarDemoRoutingModule, ToolbarModule, ButtonModule, SplitButtonModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [ToolbarDemo]
})
export class ToolbarDemoModule {}
