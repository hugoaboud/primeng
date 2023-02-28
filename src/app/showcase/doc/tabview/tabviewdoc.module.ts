import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { TabViewBasicDemo } from './basicdoc';
import { TabViewControlledDemo } from './controlleddoc';
import { TabViewDisabledDemo } from './disableddoc';
import { TabViewTemplateDemo } from './customtemplatedoc';
import { ImportDocComponent } from './importdoc';
import { TabViewClosableDemo } from './closabledoc';
import { ScrollableDocComponent } from './scrollabledoc';
import { StyleDocComponent } from './styledoc';
import { PropsDocComponent } from './propsdoc';
import { EventsDocComponent } from './eventsdoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, TabViewModule, RouterModule, ButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, TabViewBasicDemo, TabViewControlledDemo, TabViewDisabledDemo, TabViewTemplateDemo, TabViewClosableDemo, ScrollableDocComponent, StyleDocComponent, PropsDocComponent, EventsDocComponent, TemplatesDocComponent]
})
export class TabViewDocModule {}
