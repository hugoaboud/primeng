import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { TooltipBasicDemo } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TooltipPositionDemo } from './positiondoc';
import { TooltipEventDemo } from './eventdoc';
import { TooltipAutoHideDemo } from './autohidedoc';
import { TooltipDelayDemo } from './delaydoc';
import { TooltipOptionsDemo } from './optionsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TooltipModule, ButtonModule, InputTextModule, AppDocModule],
    declarations: [TooltipBasicDemo, ImportDocComponent, PropsDocComponent, StyleDocComponent, TooltipPositionDemo, TooltipEventDemo, TooltipAutoHideDemo, TooltipDelayDemo, TooltipOptionsDemo],
    exports: [AppDocModule]
})
export class TooltipDocModule {}
