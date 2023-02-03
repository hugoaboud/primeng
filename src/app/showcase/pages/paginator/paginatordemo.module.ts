import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { PaginatorDemo } from './paginatordemo';
import { PaginatorDemoRoutingModule } from './paginatordemo-routing.module';

@NgModule({
    imports: [CommonModule, PaginatorDemoRoutingModule, PaginatorModule, TabViewModule, AppCodeModule, ButtonModule, AppDemoActionsModule],
    declarations: [PaginatorDemo]
})
export class PaginatorDemoModule {}
