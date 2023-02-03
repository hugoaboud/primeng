import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeTableModule } from 'primeng/treetable';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TreeTableColGroupDemo } from './treetablecolgroupdemo';
import { TreeTableColResizeDemo } from './treetablecolresizedemo';
import { TreeTableColToggleDemo } from './treetablecoltoggledemo';
import { TreeTableContextMenuDemo } from './treetablecontextmenudemo';
import { TreeTableDemo } from './treetabledemo';
import { TreeTableDemoRoutingModule } from './treetabledemo-routing.module';
import { TreeTableEditDemo } from './treetableeditdemo';
import { TreeTableFilterDemo } from './treetablefilterdemo';
import { TreeTableFlexScrollDemo } from './treetableflexscrolldemo';
import { TreeTableLazyDemo } from './treetablelazydemo';
import { TreeTablePageDemo } from './treetablepagedemo';
import { TreeTableReorderDemo } from './treetablereorderdemo';
import { TreeTableResponsiveDemo } from './treetableresponsivedemo';
import { TreeTableScrollDemo } from './treetablescrolldemo';
import { TreeTableSelectionDemo } from './treetableselectiondemo';
import { TreeTableSizeDemo } from './treetablesizedemo';
import { TreeTableSortDemo } from './treetablesortdemo';
import { TreeTableStyleDemo } from './treetablestyledemo';
import { TreeTableTemplatingDemo } from './treetabletemplatingdemo';

@NgModule({
    imports: [CommonModule, FormsModule, TreeTableDemoRoutingModule, TreeTableModule, ToastModule, DialogModule, ButtonModule, TabViewModule, MultiSelectModule, InputTextModule, ContextMenuModule, AppCodeModule, AppDemoActionsModule],
    declarations: [
        TreeTableDemo,
        TreeTablePageDemo,
        TreeTableSortDemo,
        TreeTableSelectionDemo,
        TreeTableTemplatingDemo,
        TreeTableStyleDemo,
        TreeTableLazyDemo,
        TreeTableColGroupDemo,
        TreeTableScrollDemo,
        TreeTableFlexScrollDemo,
        TreeTableColToggleDemo,
        TreeTableResponsiveDemo,
        TreeTableContextMenuDemo,
        TreeTableColResizeDemo,
        TreeTableReorderDemo,
        TreeTableEditDemo,
        TreeTableFilterDemo,
        TreeTableSizeDemo
    ]
})
export class TreeTableDemoModule {}
