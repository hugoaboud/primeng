import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { KeyFilterDemo } from './keyfilterdemo';
import { KeyFilterDemoRoutingModule } from './keyfilterdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, KeyFilterDemoRoutingModule, KeyFilterModule, InputTextModule, MessageModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [KeyFilterDemo]
})
export class KeyFilterDemoModule {}
