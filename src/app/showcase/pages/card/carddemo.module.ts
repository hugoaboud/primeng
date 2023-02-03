import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { CardDemo } from './carddemo';
import { CardDemoRoutingModule } from './carddemo-routing.module';

@NgModule({
    imports: [CommonModule, CardDemoRoutingModule, CardModule, ButtonModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [CardDemo]
})
export class CardDemoModule {}
