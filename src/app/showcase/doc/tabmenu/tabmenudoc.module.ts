import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { TabMenuActiveDemo } from './activedoc';
import { TabMenuBasicDemo } from './basicdoc';
import { TabMenuControlledDemo } from './controlleddoc';
import { EventsDocComponent } from './eventsdoc';
import { ImportDocComponent } from './importdoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TabMenuScrollableDemo } from './scrollabledoc';
import { TabMenuTemplateDemo } from './templatedoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TabMenuModule, ButtonModule, RippleModule, AppDocModule],
    declarations: [TabMenuBasicDemo, TemplatesDocComponent, EventsDocComponent, TabMenuScrollableDemo, ImportDocComponent, MenuItemDocComponent, PropsDocComponent, StyleDocComponent, TabMenuControlledDemo, TabMenuActiveDemo, TabMenuTemplateDemo, TemplatesDocComponent],
    exports: [AppDocModule]
})
export class TabMenuDocModule {}
