import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { AutoCompleteDemo } from './autocompletedemo';
import { AutoCompleteDemoRoutingModule } from './autocompletedemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, AutoCompleteDemoRoutingModule, AutoCompleteModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [AutoCompleteDemo]
})
export class AutoCompleteDemoModule {}
