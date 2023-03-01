import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ButtonDocComponent } from './buttondoc';
import { CheckboxDocComponent } from './checkboxdoc';
import { ImportDocComponent } from './importdoc';
import { MultipleDocComponent } from './multipledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, InputTextModule, ButtonModule, CheckboxModule, RadioButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, MultipleDocComponent, ButtonDocComponent, CheckboxDocComponent]
})
export class InputGroupDocModule {}
