import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TreeContextMenuDemo } from './treecontextmenudemo';
import { TreeDemo } from './treedemo';
import { TreeDemoRoutingModule } from './treedemo-routing.module';
import { TreeDragDropDemo } from './treedragdropdemo';
import { TreeFilterDemo } from './treefilterdemo';
import { TreeHorizontalDemo } from './treehorizontaldemo';
import { TreeLazyDemo } from './treelazydemo';
import { TreeScrollDemo } from './treescrolldemo';
import { TreeSelectionDemo } from './treeselectiondemo';
import { TreeTemplatingDemo } from './treetemplatingdemo';

@NgModule({
    imports: [CommonModule, FormsModule, TreeDemoRoutingModule, TreeModule, ToastModule, ButtonModule, DialogModule, ContextMenuModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [TreeDemo, TreeTemplatingDemo, TreeSelectionDemo, TreeFilterDemo, TreeLazyDemo, TreeScrollDemo, TreeContextMenuDemo, TreeDragDropDemo, TreeHorizontalDemo]
})
export class TreeDemoModule {}
