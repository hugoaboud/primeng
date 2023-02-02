import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { TreeSelectModule } from 'primeng/treeselect';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TreeSelectDemo } from './treeselectdemo';
import { TreeSelectDemoRoutingModule } from './treeselectdemo-routing.module';

@NgModule({
    imports: [CommonModule, TreeSelectDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, CascadeSelectModule, FormsModule, AppDemoActionsModule, AppCodeModule, TreeSelectModule],
    declarations: [TreeSelectDemo]
})
export class TreeSelectDemoModule {}
