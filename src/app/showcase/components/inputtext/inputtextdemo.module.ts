import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { DocSectionModule } from '../../layout/doc/docsection/app.docsection.component';
import { BasicDocModule } from './basicdoc';
import { ImportDocModule } from './importdoc';
import { InputTextDemo } from './inputtextdemo';
import { InputTextDemoRoutingModule } from './inputtextdemo-routing.module';

@NgModule({
    imports: [CommonModule, InputTextDemoRoutingModule, FormsModule, InputTextModule, AppCodeModule, DocSectionModule, BasicDocModule, ImportDocModule],
    declarations: [InputTextDemo]
})
export class InputTextDemoModule { }
