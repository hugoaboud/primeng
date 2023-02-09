import { Component } from '@angular/core';
import { MultipleDocComponent } from '../../doc/inputgroup/multipledoc';
import { BasicDocComponent } from '../../doc/inputgroup/basicdoc';
import { ImportDocComponent } from '../../doc/inputgroup/importdoc';
import { ButtonDocComponent } from '../../doc/inputgroup/buttondoc';
import { CheckboxDocComponent } from '../../doc/inputgroup/checkboxdoc';

@Component({
    templateUrl: './inputgroupdemo.html'
})
export class InputGroupDemo {
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
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDocComponent
        },
        {
            id: 'button',
            label: 'Button',
            component: ButtonDocComponent
        },
        {
            id: 'checkbox',
            label: 'Checkbox',
            component: CheckboxDocComponent
        }
    ];
}
