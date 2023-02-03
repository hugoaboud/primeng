import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { InplaceDemo } from './inplacedemo';
import { InplaceDemoRoutingModule } from './inplacedemo-routing.module';

@NgModule({
    imports: [CommonModule, InplaceDemoRoutingModule, InplaceModule, InputTextModule, TableModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [InplaceDemo]
})
export class InplaceDemoModule {}
