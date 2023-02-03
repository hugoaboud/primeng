import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ImportDocModule } from 'src/app/showcase/doc/inputtext/importdoc';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { DocSectionModule } from 'src/app/showcase/layout/doc//docsection/app.docsection.component';
import { BasicDocModule } from '../../doc/inputtext/basicdoc';
import { InputTextDemo } from './inputtextdemo';
import { InputTextDemoRoutingModule } from './inputtextdemo-routing.module';

@NgModule({
    imports: [CommonModule, InputTextDemoRoutingModule, FormsModule, InputTextModule, AppCodeModule, DocSectionModule, BasicDocModule, ImportDocModule],
    declarations: [InputTextDemo]
})
export class InputTextDemoModule {}
