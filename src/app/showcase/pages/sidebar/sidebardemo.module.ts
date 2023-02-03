import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { SidebarDemo } from './sidebardemo';
import { SidebarDemoRoutingModule } from './sidebardemo-routing.module';

@NgModule({
    imports: [CommonModule, SidebarDemoRoutingModule, FormsModule, SidebarModule, ButtonModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [SidebarDemo]
})
export class SidebarDemoModule {}
