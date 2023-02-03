import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { MenubarDemo } from './menubardemo';
import { MenubarDemoRoutingModule } from './menubardemo-routing.module';

@NgModule({
    imports: [CommonModule, MenubarDemoRoutingModule, MenubarModule, InputTextModule, ButtonModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [MenubarDemo]
})
export class MenubarDemoModule {}
