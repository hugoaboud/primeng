import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { KnobModule } from 'primeng/knob';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { FormsModule } from '@angular/forms';
import { MinMaxDocComponent } from './minmaxdoc';
import { StepDocComponent } from './stepdoc';
import { TemplateDocComponent } from './templatedoc';
import { StrokeDocComponent } from './strokedoc';
import { SizeDocComponent } from './sizedoc';
import { ColorDocComponent } from './colordoc';
import { ReadonlyDocComponent } from './readonlydoc';
import { DisabledDocComponent } from './disableddoc';
import { PropsDocComponent } from './propsdoc';
import { EventsDocComponent } from './eventsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, AppCodeModule, AppDocModule, KnobModule],
    exports: [
        AppDocModule,
        ImportDocComponent,
        BasicDocComponent,
        MinMaxDocComponent,
        StepDocComponent,
        TemplateDocComponent,
        StrokeDocComponent,
        SizeDocComponent,
        ColorDocComponent,
        ReadonlyDocComponent,
        DisabledDocComponent,
        PropsDocComponent,
        EventsDocComponent,
        StyleDocComponent
    ],
    declarations: [
        ImportDocComponent,
        BasicDocComponent,
        MinMaxDocComponent,
        StepDocComponent,
        TemplateDocComponent,
        StrokeDocComponent,
        SizeDocComponent,
        ColorDocComponent,
        ReadonlyDocComponent,
        DisabledDocComponent,
        PropsDocComponent,
        EventsDocComponent,
        StyleDocComponent
    ]
})
export class KnobDocModule {}
