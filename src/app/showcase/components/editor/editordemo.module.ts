import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { EditorDemo } from './editordemo';
import { EditorDemoRoutingModule } from './editordemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, EditorDemoRoutingModule, EditorModule, ButtonModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [EditorDemo]
})
export class EditorDemoModule {}
