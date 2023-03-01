import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ApiDocComponent } from './apidoc';
import { ImportDocComponent } from './importdoc';
import { NgxTranslateDocComponent } from './ngx-translatedoc';
import { RepositoryDocComponent } from './repositorydoc';
import { SetLocaleDocComponent } from './setlocaledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, AppDocModule],
    declarations: [ImportDocComponent, ApiDocComponent, NgxTranslateDocComponent, RepositoryDocComponent, SetLocaleDocComponent],
    exports: [AppDocModule]
})
export class LocaleDocModule {}
