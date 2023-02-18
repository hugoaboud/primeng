import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { PositionDocComponent } from './positiondoc';
import { EventDocComponent } from './eventdoc';
import { AutoHideDocComponent } from './autohidedoc';
import { DelayDocComponent } from './delaydoc';
import { OptionsDocComponent } from './optionsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TooltipModule, ButtonModule, InputTextModule, AppDocModule],
    declarations: [BasicDocComponent, ImportDocComponent, PropsDocComponent, StyleDocComponent, PositionDocComponent, EventDocComponent, AutoHideDocComponent, DelayDocComponent, OptionsDocComponent],
    exports: [AppDocModule]
})
export class TooltipDocModule {}
