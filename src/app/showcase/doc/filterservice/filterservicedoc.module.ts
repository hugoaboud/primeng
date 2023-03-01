import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ApiDocComponent } from './apidoc';
import { BuiltInConstraintsDocComponent } from './builtinconstraintsdoc';
import { CustomConstraintsDocComponent } from './customconstraintsdoc';
import { ImportDocComponent } from './importdoc';
import { FilterServiceTableIntegrationDemo } from './tableintegrationdoc';
import { UsageDocComponent } from './usagedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, RouterModule, TableModule],
    exports: [AppDocModule],
    declarations: [ApiDocComponent, BuiltInConstraintsDocComponent, CustomConstraintsDocComponent, ImportDocComponent, UsageDocComponent, FilterServiceTableIntegrationDemo]
})
export class FilterServiceDocModule {}
