import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ConfirmationDemo } from './confirmationdemo';
import { PaymentDemo } from './paymentdemo';
import { PersonalDemo } from './personaldemo';
import { SeatDemo } from './seatdemo';
import { StepsDemo } from './stepsdemo';
import { StepsDemoRoutingModule } from './stepsdemo-routing.module';
import { TicketService } from './ticketservice';

@NgModule({
    imports: [CommonModule, StepsDemoRoutingModule, StepsModule, TabViewModule, AppCodeModule, AppDemoActionsModule, ButtonModule, CardModule, InputTextModule, DropdownModule, InputMaskModule, CheckboxModule, ToastModule, FormsModule],
    declarations: [StepsDemo, SeatDemo, ConfirmationDemo, PersonalDemo, PaymentDemo],
    providers: [TicketService]
})
export class StepsDemoModule {}
