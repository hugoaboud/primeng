import { Component } from '@angular/core';
import { ApiDocComponent } from '../../doc/filterservice/apidoc';
import { BuiltInConstraintsDocComponent } from '../../doc/filterservice/builtinconstraintsdoc';
import { CustomConstraintsDocComponent } from '../../doc/filterservice/customconstraintsdoc';
import { ImportDocComponent } from '../../doc/filterservice/importdoc';
import { UsageDocComponent } from '../../doc/filterservice/usagedoc';
import { FilterServiceTableIntegrationDemo } from '../../doc/filterservice/tableintegrationdoc';

@Component({
    templateUrl: './filterservicedemo.html'
})
export class FilterServiceDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'usage',
            label: 'Usage',
            component: UsageDocComponent
        },
        {
            id: 'builtinconstraints',
            label: 'Built-in Constraints',
            component: BuiltInConstraintsDocComponent
        },
        {
            id: 'customconstraints',
            label: 'Custom Constraints',
            component: CustomConstraintsDocComponent
        },
        {
            id: 'table-integration',
            label: 'Table Integration',
            component: FilterServiceTableIntegrationDemo
        },
        {
            id: 'api',
            label: 'FilterService API',
            component: ApiDocComponent
        }
    ];
}
