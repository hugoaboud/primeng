import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { AnimationDocComponent } from './animationdoc';
import { BasicDocComponent } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { InterfaceDocComponent } from './interfacedoc';
import { MultipleDocComponent } from './multipledoc';
import { PositionDocComponent } from './positiondoc';
import { PropsDocComponent } from './propsdoc';
import { ResponsiveDocComponent } from './responsivedoc';
import { SeverityDocComponent } from './severitydoc';
import { StickyDocComponent } from './stickydoc';
import { StyleDocComponent } from './styledoc';
import { TargetDocComponent } from './targetdoc';
import { TemplateDocComponent } from './templatedoc';
import { TemplatesDocComponent } from './templatesdoc';
import { ClearDocComponent } from './cleardoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ToastModule, ButtonModule, RippleModule],
    declarations: [
        AnimationDocComponent,
        BasicDocComponent,
        EventsDocComponent,
        ImportDocComponent,
        InterfaceDocComponent,
        MultipleDocComponent,
        PositionDocComponent,
        PropsDocComponent,
        ResponsiveDocComponent,
        SeverityDocComponent,
        StickyDocComponent,
        StyleDocComponent,
        TargetDocComponent,
        TemplateDocComponent,
        TemplatesDocComponent,
        ClearDocComponent
    ],
    exports: [AppDocModule]
})
export class ToastDocModule {}
