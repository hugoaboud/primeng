import { Component } from '@angular/core';
import { ApiDocComponent } from '../../doc/locale/apidoc';
import { ImportDocComponent } from '../../doc/locale/importdoc';
import { NgxTranslateDocComponent } from '../../doc/locale/ngx-translatedoc';
import { RepositoryDocComponent } from '../../doc/locale/repositorydoc';
import { SetLocaleDocComponent } from '../../doc/locale/setlocaledoc';

@Component({
    templateUrl: './locale.component.html'
})
export class LocaleComponent {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'set-locale',
            label: 'Set Locale',
            component: SetLocaleDocComponent
        },
        {
            id: 'ngx-translate',
            label: 'ngx-translate',
            component: NgxTranslateDocComponent
        },
        {
            id: 'repository',
            label: 'Repository',
            component: RepositoryDocComponent
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDocComponent
        }
    ]
}
