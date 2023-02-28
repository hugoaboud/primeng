import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { ToastAnimationDemo } from './animationdoc';
import { ToastBasicDemo } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { InterfaceDocComponent } from './interfacedoc';
import { ToastMultipleDemo } from './multipledoc';
import { ToastPositionDemo } from './positiondoc';
import { PropsDocComponent } from './propsdoc';
import { ToastResponsiveDemo } from './responsivedoc';
import { ToastSeverityDemo } from './severitydoc';
import { ToastStickyDemo } from './stickydoc';
import { StyleDocComponent } from './styledoc';
import { ToastTargetDemo } from './targetdoc';
import { ToastTemplateDemo } from './templatedoc';
import { TemplatesDocComponent } from './templatesdoc';
import { ToastClearDemo } from './cleardoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ToastModule, ButtonModule, RippleModule],
    declarations: [
        ToastAnimationDemo,
        ToastBasicDemo,
        EventsDocComponent,
        ImportDocComponent,
        InterfaceDocComponent,
        ToastMultipleDemo,
        ToastPositionDemo,
        PropsDocComponent,
        ToastResponsiveDemo,
        ToastSeverityDemo,
        ToastStickyDemo,
        StyleDocComponent,
        ToastTargetDemo,
        ToastTemplateDemo,
        TemplatesDocComponent,
        ToastClearDemo
    ],
    exports: [AppDocModule]
})
export class ToastDocModule {}
