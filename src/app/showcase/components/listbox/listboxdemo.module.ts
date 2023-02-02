import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ListboxDemo } from './listboxdemo';
import { ListboxDemoRoutingModule } from './listboxdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, ListboxDemoRoutingModule, ListboxModule, ButtonModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ListboxDemo]
})
export class ListboxDemoModule {}
