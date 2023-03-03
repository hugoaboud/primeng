import { Component } from '@angular/core';
import { FileUploadAdvancedDemo } from '../../doc/fileupload/advanceddoc';
import { FileUploadAutoDemo } from '../../doc/fileupload/autodoc';
import { FileUploadBasicDemo } from '../../doc/fileupload/basicdoc';
import { EventsDocComponent } from '../../doc/fileupload/eventsdoc';
import { ImportDocComponent } from '../../doc/fileupload/importdoc';
import { MethodsDocComponent } from '../../doc/fileupload/methodsdoc';
import { PropsDocComponent } from '../../doc/fileupload/propsdoc';
import { StyleDocComponent } from '../../doc/fileupload/styledoc';
import { FileUploadTemplateDemo } from '../../doc/fileupload/templatedoc';
import { TemplatesDocComponent } from '../../doc/fileupload/templatesdoc';

@Component({
    templateUrl: './fileuploaddemo.html'
})
export class FileUploadDemo {

    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: FileUploadBasicDemo
        },
        {
            id: 'auto',
            label: 'Auto',
            component: FileUploadAutoDemo
        },
        {
            id: 'template',
            label: 'Template',
            component: FileUploadTemplateDemo
        },
        {
            id: 'advanced',
            label: 'Advanced',
            component: FileUploadAdvancedDemo
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'props',
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
            id: 'templates',
            label: 'Templates',
            component: TemplatesDocComponent
        }
    ];
}
