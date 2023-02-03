import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { PasswordDemo } from './passworddemo';
import { PasswordDemoRoutingModule } from './passworddemo-routing.module';

@NgModule({
    imports: [CommonModule, PasswordDemoRoutingModule, PasswordModule, DividerModule, TabViewModule, FormsModule, AppDemoActionsModule, AppCodeModule],
    declarations: [PasswordDemo]
})
export class PasswordDemoModule {}
