import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ToggleClassDocComponent } from './toggleclassdoc';
import { ImportDocComponent } from './importdoc';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AnimationDocComponent } from './animationdoc';
import { PropsDocComponent } from './propsdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, StyleClassModule, ButtonModule, InputTextModule],
    declarations: [ImportDocComponent, ToggleClassDocComponent, AnimationDocComponent, PropsDocComponent],
    exports: [ImportDocComponent, ToggleClassDocComponent, AnimationDocComponent, PropsDocComponent]
})
export class StyleClassDocModule {}
