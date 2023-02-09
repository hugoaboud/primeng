import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/carousel/importdoc';
import { BasicDocComponent } from '../../doc/carousel/basicdoc';
import { PropsDocComponent } from '../../doc/carousel/propsdoc';
import { StyleDocComponent } from '../../doc/carousel/styledoc';
import { CircularDocComponent } from '../../doc/carousel/circulardoc';
import { NumScrollDocComponent } from '../../doc/carousel/numscrolldoc';
import { ResponsiveDocComponent } from '../../doc/carousel/responsivedoc';
import { VerticalDocComponent } from '../../doc/carousel/verticaldoc';

@Component({
    templateUrl: './carouseldemo.html',
    styleUrls: ['./carouseldemo.scss']
})
export class CarouselDemo {
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
            id: 'circular',
            label: 'Circular',
            component: CircularDocComponent
        },
        {
            id: 'numscroll',
            label: 'Num Scroll',
            component: NumScrollDocComponent
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDocComponent
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDocComponent
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
            id: 'api',
            label: 'API',
            doc: [{ name: 'Carousel', pathname: '/modules/carousel.html' }]
        }
    ];
}
