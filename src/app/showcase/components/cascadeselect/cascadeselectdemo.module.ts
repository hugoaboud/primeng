import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { CascadeSelectDemo } from './cascadeselectdemo';
import { CascadeSelectDemoRoutingModule } from './cascadeselectdemo-routing.module';

@NgModule({
    imports: [CommonModule, CascadeSelectDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, CascadeSelectModule, FormsModule, AppDemoActionsModule, AppCodeModule],
    declarations: [CascadeSelectDemo]
})
export class CascadeSelectDemoModule {}
