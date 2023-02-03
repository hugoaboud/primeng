import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { RatingDemo } from './ratingdemo';
import { RatingDemoRoutingModule } from './ratingdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, RatingDemoRoutingModule, RatingModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [RatingDemo]
})
export class RatingDemoModule {}
