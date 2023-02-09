import { Component } from '@angular/core';
import { DisabledDocComponent } from 'src/app/showcase/doc/inputtext/disableddoc';
import { FloatLabelDocComponent } from 'src/app/showcase/doc/inputtext/floatlabeldoc';
import { HelpTextDocComponent } from 'src/app/showcase/doc/inputtext/helptextdoc';
import { IconsDocComponent } from 'src/app/showcase/doc/inputtext/iconsdoc';
import { ImportDocComponent } from 'src/app/showcase/doc/inputtext/importdoc';
import { InvalidDocComponent } from 'src/app/showcase/doc/inputtext/invaliddoc';
import { SizesDocComponent } from 'src/app/showcase/doc/inputtext/sizesdoc';
import { BasicDocComponent } from '../../doc/inputtext/basicdoc';
import { KeyFilterDocComponent } from '../../doc/inputtext/keyfilterdoc';
import { PropsDocComponent } from '../../doc/inputtext/propsdoc';
import { StyleDocComponent } from '../../doc/inputtext/styledoc';

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
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        },
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'InputText', pathname: '/modules/inputtext.html' }]
        }
    ];
}
