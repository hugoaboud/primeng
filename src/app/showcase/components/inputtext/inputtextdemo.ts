import { Component, ViewEncapsulation } from '@angular/core';
import { BasicDocComponent } from './basicdoc';
import { DisabledDocComponent } from './disableddoc';
import { FloatLabelDocComponent } from './floatlabeldoc';
import { HelpTextDocComponent } from './helptextdoc';
import { IconsDocComponent } from './iconsdoc';
import { ImportDocComponent } from './importdoc';
import { InvalidDocComponent } from './invaliddoc';
import { KeyFilterDocComponent } from './keyfilterdoc';
import { SizesDocComponent } from './sizesdoc';

@Component({
    templateUrl: './inputtextdemo.html',
    styleUrls: ['./inputtextdemo.scss']
})
export class InputTextDemo {
    disabled: boolean = true;

    value1: string;

    value2: string;

    value3: string;

    value4: string;

    value5: string = 'Disabled';

    value6: string;

    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDocComponent
        },
        {
            id: 'icons',
            label: 'Icons',
            component: IconsDocComponent
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyFilterDocComponent
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDocComponent
        },
        {
            id: 'helptext',
            label: 'Help Text',
            component: HelpTextDocComponent
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDocComponent
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
    ]
}
