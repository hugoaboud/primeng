import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { CircleDocComponent } from './circledoc';
import { CustomDocComponent } from './customdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { LinearDocComponent } from './lineardoc';
import { MaskDocComponent } from './maskdoc';
import { PropsDocComponent } from './propsdoc';
import { QuarterCircleDocComponent } from './quartercircledoc';
import { SemiCircleDocComponent } from './semicircledoc';
import { StyleDocComponent } from './styledoc';
import { TemplatesDocComponent } from './templatesdoc';
import { TooltipDocComponent } from './tooltipdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, SpeedDialModule, MessagesModule, ToastModule, TooltipModule],
    exports: [AppDocModule],
    declarations: [
        ImportDocComponent,
        LinearDocComponent,
        CircleDocComponent,
        SemiCircleDocComponent,
        QuarterCircleDocComponent,
        TooltipDocComponent,
        MaskDocComponent,
        CustomDocComponent,
        StyleDocComponent,
        PropsDocComponent,
        TemplatesDocComponent,
        EventsDocComponent
    ]
})
export class SpeedDialDocModule {}
