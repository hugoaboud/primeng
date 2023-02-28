import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { DialogBasicDemo } from './basicdoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { DialogLongContentDemo } from './longcontentdoc';
import { DialogResponsiveDemo } from './responsivedoc';
import { DialogPositionDemo } from './positiondoc';
import { DialogMaximizableDemo } from './maximizabledoc';
import { DialogTemplateDemo } from './templatedoc';
import { DialogOverlaysInsideDemo } from './overlaysinsidedoc';
import { DialogModalDemo } from './modaldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, FormsModule, DialogModule, ButtonModule, DropdownModule, AppDocModule],
    declarations: [
        DialogBasicDemo,
        EventsDocComponent,
        ImportDocComponent,
        PropsDocComponent,
        StyleDocComponent,
        DialogLongContentDemo,
        DialogResponsiveDemo,
        DialogPositionDemo,
        DialogMaximizableDemo,
        DialogTemplateDemo,
        DialogOverlaysInsideDemo,
        DialogModalDemo
    ],
    exports: [AppDocModule]
})
export class DialogDocModule {}
