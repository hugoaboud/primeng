import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { LongContentDocComponent } from './longcontentdoc';
import { ResponsiveDocComponent } from './responsivedoc';
import { PositionDocComponent } from './positiondoc';
import { MaximizableDocComponent } from './maximizabledoc';
import { CustomDocComponent } from './customdoc';
import { OverlaysInsideDocComponent } from './overlaysinsidedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, FormsModule, DialogModule, ButtonModule, DropdownModule, AppDocModule],
    declarations: [
        BasicDocComponent,
        EventsDocComponent,
        ImportDocComponent,
        PropsDocComponent,
        StyleDocComponent,
        LongContentDocComponent,
        ResponsiveDocComponent,
        PositionDocComponent,
        MaximizableDocComponent,
        CustomDocComponent,
        OverlaysInsideDocComponent
    ],
    exports: [AppDocModule]
})
export class DialogDocModule {}
