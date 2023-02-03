import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FocusTrapModule } from 'primeng/focustrap';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { FocusTrapDemo } from './focustrapdemo';
import { FocusTrapDemoRoutingModule } from './focustrapdemo-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FocusTrapDemoRoutingModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        AccordionModule,
        TabViewModule,
        AppCodeModule,
        FocusTrapModule,
        AutoCompleteModule,
        CalendarModule,
        MultiSelectModule,
        DropdownModule,
        EditorModule,
        AppDemoActionsModule
    ],
    declarations: [FocusTrapDemo]
})
export class FocusTrapDemoModule {}
