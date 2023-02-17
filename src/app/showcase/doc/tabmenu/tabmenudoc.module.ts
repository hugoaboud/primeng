import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ActiveDocComponent } from './activedoc';
import { BasicDocComponent } from './basicdoc';
import { ControlledDocComponent } from './controlleddoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { ScrollableDocComponent } from './scrollabledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TabMenuModule, ButtonModule, RippleModule, AppDocModule],
    declarations: [BasicDocComponent, EventsDocComponent, ScrollableDocComponent, ImportDocComponent, MenuItemDocComponent, PropsDocComponent, StyleDocComponent, ControlledDocComponent, ActiveDocComponent],
    exports: [AppDocModule]
})
export class TabMenuDocModule {}
