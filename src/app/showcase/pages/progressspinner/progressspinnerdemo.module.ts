import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ProgressSpinnerDemo } from './progressspinnerdemo';
import { ProgressSpinnerDemoRoutingModule } from './progressspinnerdemo-routing.module';

@NgModule({
    imports: [CommonModule, ProgressSpinnerDemoRoutingModule, ProgressSpinnerModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ProgressSpinnerDemo]
})
export class ProgressSpinnerDemoModule {}
