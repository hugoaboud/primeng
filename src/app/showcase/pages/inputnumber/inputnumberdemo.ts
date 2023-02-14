import { Component, ViewEncapsulation } from '@angular/core';
import { LocaleDocComponent } from '../../doc/inputnumber/localedoc';
import { ImportDocComponent } from '../../doc/inputnumber/importdoc';
import { NumeralsDocComponent } from '../../doc/inputnumber/numeralsdoc';
import { CurrencyDocComponent } from '../../doc/inputnumber/currencydoc';
import { PrefixSuffixDocComponent } from '../../doc/inputnumber/prefixsuffixdoc';
import { ButtonsDocComponent } from '../../doc/inputnumber/buttonsdoc';
import { VerticalDocComponent } from '../../doc/inputnumber/verticaldoc';
import { FloatlabelDocComponent } from '../../doc/inputnumber/floatlabeldoc';
import { InvalidDocComponent } from '../../doc/inputnumber/invaliddoc';
import { DisabledDocComponent } from '../../doc/inputnumber/disableddoc';
import { PropsDocComponent } from '../../doc/inputnumber/propsdoc';
import { MethodsDocComponent } from '../../doc/inputnumber/methodsdoc';
import { EventsDocComponent } from '../../doc/inputnumber/eventsdoc';
import { StyleDocComponent } from '../../doc/inputnumber/styledoc';

@Component({
    templateUrl: './inputnumberdemo.html',
    encapsulation: ViewEncapsulation.None
})
export class InputNumberDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'numeral',
            label: 'Numeral',
            component: NumeralsDocComponent
        },
        {
            id: 'locale',
            label: 'Locale',
            component: LocaleDocComponent
        },
        {
            id: 'currency',
            label: 'Currency',
            component: CurrencyDocComponent
        },
        {
            id: 'prefixsuffix',
            label: 'Prefix & Suffix',
            component: PrefixSuffixDocComponent
        },
        {
            id: 'buttons',
            label: 'Buttons',
            component: ButtonsDocComponent
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDocComponent
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatlabelDocComponent
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDocComponent
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDocComponent
        },
        { id: 'methods', label: 'Methods', component: MethodsDocComponent }
    ];
}
