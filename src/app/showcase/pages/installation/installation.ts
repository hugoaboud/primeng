import { Component } from '@angular/core';
import { DownloadDocComponent } from '../../doc/installation/downloaddoc';
import { StylesDocComponent } from '../../doc/installation/stylesdoc';
import { UsageDocComponent } from '../../doc/installation/usagedoc';
import { AngularCliDocComponent } from '../../doc/installation/angular-clidoc';
import { VideosDocComponent } from '../../doc/installation/videos/videosdoc';

@Component({
    templateUrl: './installation.html'
})
export class InstallationComponent {
    docs = [
        {
            id: 'download',
            label: 'Download',
            component: DownloadDocComponent
        },
        {
            id: 'angular-cli',
            label: 'Angular CLI Integration',
            component: AngularCliDocComponent
        },
        {
            id: 'styles',
            label: 'Styles',
            component: StylesDocComponent
        },
        {
            id: 'usage',
            label: 'Usage',
            component: UsageDocComponent
        },
        {
            id: 'videos',
            label: 'Videos',
            component: VideosDocComponent
        }
    ];
}
