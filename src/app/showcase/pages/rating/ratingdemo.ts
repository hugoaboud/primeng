import { Component } from '@angular/core';
import { DisabledDocComponent } from '../../doc/rating/disableddoc';
import { BasicDocComponent } from '../../doc/rating/basicdoc';
import { ImportDocComponent } from '../../doc/rating/importdoc';
import { NumberOfStarsDocComponent } from '../../doc/rating/numberofstarsdoc';
import { ReadOnlyDocComponent } from '../../doc/rating/readonlydoc';
import { TemplateDocComponent } from '../../doc/rating/templatedoc';
import { WithoutCancelDocComponent } from '../../doc/rating/withoutcanceldoc';
import { StyleDocComponent } from '../../doc/rating/styledoc';
import { PropsDocComponent } from '../../doc/rating/propsdoc';
import { EventsDocComponent } from '../../doc/rating/eventsdoc';

@Component({
    templateUrl: './ratingdemo.html'
})
export class RatingDemo {
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
            id: 'withoutcancel',
            label: 'Without Cancel',
            component: WithoutCancelDocComponent
        },
        {
            id: 'numberofstars',
            label: 'Number of Stars',
            component: NumberOfStarsDocComponent
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDocComponent
        },
        {
            id: 'readonly',
            label: 'ReadOnly',
            component: ReadOnlyDocComponent
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
        }
    ];
}
