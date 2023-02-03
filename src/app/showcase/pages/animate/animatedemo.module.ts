import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimateModule } from 'primeng/animate';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { AnimateDemoRoutingModule } from './animate-routing.module';
import { AnimateDemo } from './animatedemo';

@NgModule({
    imports: [CommonModule, FormsModule, AnimateDemoRoutingModule, AnimateModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [AnimateDemo]
})
export class AnimateDemoModule {}
