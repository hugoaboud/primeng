import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { DownloadDocComponent } from './downloaddoc';
import { StylesDocComponent } from './stylesdoc';
import { UsageDocComponent } from './usagedoc';
import { AngularCliDocComponent } from './videos/angular-clidoc';
import { VideosDocComponent } from './videos/videosdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, FormsModule, AppDocModule, ButtonModule],
    declarations: [DownloadDocComponent, StylesDocComponent, UsageDocComponent, VideosDocComponent, AngularCliDocComponent],
    exports: [AppDocModule]
})
export class InstallationDocModule {}
