import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/carousel/importdoc';
import { CarouselBasicDemo } from '../../doc/carousel/basicdoc';
import { PropsDocComponent } from '../../doc/carousel/propsdoc';
import { StyleDocComponent } from '../../doc/carousel/styledoc';
import { CarouselCircularDemo } from '../../doc/carousel/circulardoc';
import { NumScrollDemo } from '../../doc/carousel/numscrolldoc';
import { ResponsiveDocComponent } from '../../doc/carousel/responsivedoc';
import { CarouselVerticalDemoComponent } from '../../doc/carousel/verticaldoc';
import { CarouselCustomContentDemo } from '../../doc/carousel/templatedoc';

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
            component: CarouselBasicDemo
        },
        {
            id: 'circular',
            label: 'Circular',
            component: CarouselCircularDemo
        },
        {
            id: 'numscroll',
            label: 'Num Scroll',
            component: NumScrollDemo
        },
        {
            id: 'custom',
            label: 'Custom Content',
            component: CarouselCustomContentDemo
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDocComponent
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: CarouselVerticalDemoComponent
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
        }
    ];
}
