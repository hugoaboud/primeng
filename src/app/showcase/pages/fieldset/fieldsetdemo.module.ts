import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { FieldsetDemo } from './fieldsetdemo';
import { FieldsetDemoRoutingModule } from './fieldsetdemo-routing.module';

@NgModule({
    imports: [CommonModule, FieldsetDemoRoutingModule, FieldsetModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [FieldsetDemo]
})
export class FieldsetDemoModule {}
