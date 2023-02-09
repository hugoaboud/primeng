import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/editor/basicdoc';
import { CustomToolbarDocComponent } from '../../doc/editor/customtoolbardoc';
import { EventsDocComponent } from '../../doc/editor/events';
import { ImportDocComponent } from '../../doc/editor/importdoc';
import { MethodsDocComponent } from '../../doc/editor/methodsdoc';
import { PropsDocComponent } from '../../doc/editor/propsdoc';
import { QuillDocComponent } from '../../doc/editor/quilldoc';
import { ReadOnlyDocComponent } from '../../doc/editor/readonlydoc';
import { StyleDocComponent } from '../../doc/editor/styledoc';

@Component({
    templateUrl: './editordemo.html'
})
export class EditorDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'quill',
            label: 'Quill',
            component: QuillDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDocComponent
        },
        {
            id: 'readonly',
            label: 'Read Only',
            component: ReadOnlyDocComponent
        },
        {
            id: 'customtoolbar',
            label: 'Custom Toolbar',
            component: CustomToolbarDocComponent
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
        {
            id: 'methods',
            label: 'Methods',
            component: MethodsDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Editor', pathname: '/modules/editor.html' }]
        }
    ];
}
