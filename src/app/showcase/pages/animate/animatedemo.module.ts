import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimateDocModule } from '../../doc/animate/animatedoc.module';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AnimateDemoRoutingModule } from './animate-routing.module';
import { AnimateDemo } from './animatedemo';

@NgModule({
    imports: [CommonModule, AnimateDemoRoutingModule, AppDocModule, AnimateDocModule],
    declarations: [AnimateDemo]
})
export class AnimateDemoModule {}
