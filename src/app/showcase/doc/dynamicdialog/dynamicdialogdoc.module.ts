import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { OpenDocComponent } from './opendoc';
import { ImportDocComponent } from './importdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { ProductListDemo } from './productlistdemo';
import { BasicDocComponent } from './basicdoc';
import { UsageDocComponent } from './usagedoc';
import { PassingDataDocComponent } from './passingdatadoc';
import { CloseDocComponent } from './closedoc';
import { ProductListDemoDoc } from './productlistdemodoc';
import { EventsDocComponent } from './eventsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, FormsModule, DialogModule, ButtonModule, AppDocModule, ToastModule, TableModule],
    declarations: [
        OpenDocComponent,
        ImportDocComponent,
        PropsDocComponent,
        StyleDocComponent,
        BasicDocComponent,
        ProductListDemo,
        UsageDocComponent,
        PassingDataDocComponent,
        CloseDocComponent,
        ProductListDemoDoc,
        StyleDocComponent,
        EventsDocComponent
    ],
    exports: [AppDocModule],
    entryComponents: [ProductListDemo]
})
export class DynamicDialogDocModule {}
