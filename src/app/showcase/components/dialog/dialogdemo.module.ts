import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { DialogDemo } from './dialogdemo';
import { DialogDemoRoutingModule } from './dialogdemo-routing.module';

@NgModule({
    imports: [CommonModule, DialogDemoRoutingModule, DialogModule, ButtonModule, AppCodeModule, AppDemoActionsModule, TabViewModule],
    declarations: [DialogDemo]
})
export class DialogDemoModule {}
