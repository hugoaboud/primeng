import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { StyleClassToggleClassDemo } from './toggleclassdoc';
import { ImportDocComponent } from './importdoc';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassAnimationDemo } from './animationdoc';
import { PropsDocComponent } from './propsdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, StyleClassModule, ButtonModule, InputTextModule],
    declarations: [ImportDocComponent, StyleClassToggleClassDemo, StyleClassAnimationDemo, PropsDocComponent],
    exports: [AppDocModule]
})
export class StyleClassDocModule {}
