import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { MenuBasicDemo } from './basicdoc';
import { MenuCustomContentDemo } from './customdoc';
import { MenuCommandDemo } from './commanddoc';
import { EventsDocComponent } from './eventsdoc';
import { MethodsDocComponent } from './methodsdoc';
import { MenuGroupDemo } from './groupdoc';
import { ImportDocComponent } from './importdoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { MenuNavigationDemo } from './navigationdoc';
import { MenuPopupDemo } from './popupdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MenuModule, ToastModule, ButtonModule, AppDocModule],
    declarations: [
        MenuBasicDemo,
        MenuCommandDemo,
        MenuCustomContentDemo,
        EventsDocComponent,
        MenuGroupDemo,
        ImportDocComponent,
        MenuItemDocComponent,
        MethodsDocComponent,
        MenuNavigationDemo,
        MenuPopupDemo,
        PropsDocComponent,
        StyleDocComponent
    ],
    exports: [AppDocModule]
})
export class MenuDocModule {}
