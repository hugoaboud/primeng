import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { CustomDocComponent } from './customdoc';
import { CommandDocComponent } from './commanddoc';
import { EventsDocComponent } from './eventsdoc';
import { MethodsDocComponent } from './methodsdoc';
import { GroupDocComponent } from './groupdoc';
import { ImportDocComponent } from './importdoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { NavigationDocComponent } from './navigationdoc';
import { PopupDocComponent } from './popupdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MenuModule, ToastModule, ButtonModule, AppDocModule],
    declarations: [
        BasicDocComponent,
        CommandDocComponent,
        CustomDocComponent,
        EventsDocComponent,
        GroupDocComponent,
        ImportDocComponent,
        MenuItemDocComponent,
        MethodsDocComponent,
        NavigationDocComponent,
        PopupDocComponent,
        PropsDocComponent,
        StyleDocComponent
    ],
    exports: [AppDocModule]
})
export class MenuDocModule {}
