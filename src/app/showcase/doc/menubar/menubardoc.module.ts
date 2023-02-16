import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { CustomDocComponent } from './customdoc';
import { BasicDocComponent } from './basicdoc';
import { ImportDocComponent } from './importdoc';
import { MenuItemDocComponent } from './menuitemdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TemplatesDocComponent } from './templatesdoc';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MenubarModule, InputTextModule, AppDocModule],
    declarations: [BasicDocComponent, ImportDocComponent, MenuItemDocComponent, PropsDocComponent, StyleDocComponent, CustomDocComponent, TemplatesDocComponent],
    exports: [AppDocModule]
})
export class MenubarDocModule {}
