import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { VirtualScrollerDemo } from './virtualscrollerdemo';
import { VirtualScrollerDemoRoutingModule } from './virtualscrollerdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, VirtualScrollerDemoRoutingModule, VirtualScrollerModule, ButtonModule, InputTextModule, DropdownModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [VirtualScrollerDemo]
})
export class VirtualScrollerDemoModule {}
