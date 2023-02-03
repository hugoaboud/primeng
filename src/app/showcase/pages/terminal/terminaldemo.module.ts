import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { TerminalModule } from 'primeng/terminal';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TerminalDemo } from './terminaldemo';
import { TerminalDemoRoutingModule } from './terminaldemo-routing.module';

@NgModule({
    imports: [CommonModule, TerminalDemoRoutingModule, TerminalModule, TabViewModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [TerminalDemo]
})
export class TerminalDemoModule {}
