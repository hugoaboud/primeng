import { Component } from '@angular/core';
import { PropsDocComponent } from '../../doc/skeleton/propsdoc';
import { StyleDocComponent } from '../../doc/skeleton/styledoc';
import { CardDocComponent } from '../../doc/skeleton/carddoc';
import { DataTableDocComponent } from '../../doc/skeleton/datatabledoc';
import { ImportDocComponent } from '../../doc/skeleton/importdoc';
import { ListDocComponent } from '../../doc/skeleton/listdoc';
import { ShapesDocComponent } from '../../doc/skeleton/shapesdoc';

@Component({
    templateUrl: './skeletondemo.html',
    styleUrls: ['./skeletondemo.scss']
})
export class SkeletonDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'shapes',
            label: 'Shapes',
            component: ShapesDocComponent
        },
        {
            id: 'card',
            label: 'Card',
            component: CardDocComponent
        },
        {
            id: 'list',
            label: 'List',
            component: ListDocComponent
        },
        {
            id: 'datatable',
            label: 'DataTable',
            component: DataTableDocComponent
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
        }
    ];
}
