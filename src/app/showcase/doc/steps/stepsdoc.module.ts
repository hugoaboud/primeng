import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ConfirmationDemo } from './confirmationdemo';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { InteractiveDocComponent } from './interactivedoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { MethodsDocComponent } from './methodsdoc';
import { PaymentDemo } from './paymentdemo';
import { PersonalDemo } from './personaldemo';
import { PropsDocComponent } from './propsdoc';
import { StepsRoutingDemo } from './routingdoc';
import { SeatDemo } from './seatdemo';
import { StyleDocComponent } from './styledoc';
import { TicketService } from '../../service/ticketservice';

@NgModule({
    imports: [
        CommonModule,
        AppCodeModule,
        StepsModule,
        ToastModule,
        AppDocModule,
        FormsModule,
        DropdownModule,
        InputTextModule,
        InputMaskModule,
        CheckboxModule,
        CardModule
    ],
    declarations: [BasicDocComponent, ImportDocComponent, MenuItemDocComponent, MethodsDocComponent, PropsDocComponent, StyleDocComponent, InteractiveDocComponent, EventsDocComponent, ConfirmationDemo, PaymentDemo, PersonalDemo, SeatDemo, StepsRoutingDemo],
    exports: [AppDocModule],
    providers: [TicketService]
})
export class StepsDocModule {}
