import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/keyfilter/importdoc';
import { PresetsDocComponent } from '../../doc/keyfilter/presetsdoc';
import { PropsDocComponent } from '../../doc/keyfilter/propsdoc';
import { RegexDocComponent } from '../../doc/keyfilter/regexdoc';

@Component({
    templateUrl: './keyfilterdemo.html'
})
export class KeyFilterDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'presets',
            label: 'Presets',
            component: PresetsDocComponent
        },
        {
            id: 'regex',
            label: 'Regex',
            component: RegexDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDocComponent
        }
    ];
}
