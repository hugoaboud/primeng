import { Component } from '@angular/core';
import { GalleriaAdvancedDemo } from '../../doc/galleria/advanceddoc';
import { GalleriaAutoplayDemo } from '../../doc/galleria/autoplaydoc';
import { GalleriaBasicDemo } from '../../doc/galleria/basicdoc';
import { GalleriaCaptionDemo } from '../../doc/galleria/captiondoc';
import { GalleriaControlledDemo } from '../../doc/galleria/controlleddoc';
import { GalleriaFullScreenTemplateDemo } from '../../doc/galleria/fullscreen/customcontentdoc';
import { FullScreenDocComponent } from '../../doc/galleria/fullscreen/fullscreendoc';
import { GalleriaWithoutThumbnailsDemo } from '../../doc/galleria/fullscreen/withoutthumbnailsdoc';
import { GalleriaWithThumbnailsDemo } from '../../doc/galleria/fullscreen/withthumbnailsdoc';
import { ImportDocComponent } from '../../doc/galleria/importdoc';
import { GalleriaIndicatorClickEventDemo } from '../../doc/galleria/indicator/clickeventdoc';
import { GalleriaIndicatorHoverEventDemo } from '../../doc/galleria/indicator/hovereventdoc';
import { IndicatorDocComponent } from '../../doc/galleria/indicator/indicatordoc';
import { GalleriaIndicatorPositionedDemo } from '../../doc/galleria/indicator/positioneddoc';
import { GalleriaIndicatorTemplateDemo } from '../../doc/galleria/indicator/templatedoc';
import { HoverDocComponent } from '../../doc/galleria/navigator/hoverdoc';
import { IndicatorsDocComponent } from '../../doc/galleria/navigator/indicatorsdoc';
import { ItemThumbnailsDocComponent } from '../../doc/galleria/navigator/itemthumbnailsdoc';
import { ItemWithoutThumbnailsDocComponent } from '../../doc/galleria/navigator/itemwithoutthumbnailsdoc';
import { NavigatorDocComponent } from '../../doc/galleria/navigator/navigatordoc';
import { PropsDocComponent } from '../../doc/galleria/propsdoc';
import { GalleriaResponsiveDemo } from '../../doc/galleria/responsivedoc';
import { StyleDocComponent } from '../../doc/galleria/styledoc';
import { GalleriaThumbnailDemo } from '../../doc/galleria/thumbnaildoc';

@Component({
    templateUrl: './galleriademo.html',
    styleUrls: ['./galleriademo.scss']
})
export class GalleriaDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: GalleriaBasicDemo
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: GalleriaControlledDemo
        },
        {
            id: 'indicator',
            label: 'Indicator',
            component: IndicatorDocComponent,
            children: [
                {
                    id: 'clickevent',
                    label: 'Click Event',
                    component: GalleriaIndicatorClickEventDemo
                },
                {
                    id: 'hoverevent',
                    label: 'Hover Event',
                    component: GalleriaIndicatorHoverEventDemo
                },
                {
                    id: 'positioned',
                    label: 'Positioned',
                    component: GalleriaIndicatorPositionedDemo
                },
                {
                    id: 'template',
                    label: 'Templating',
                    component: GalleriaIndicatorTemplateDemo
                }
            ]
        },
        {
            id: 'thumbnail',
            label: 'Thumbnail',
            component: GalleriaThumbnailDemo
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: GalleriaResponsiveDemo
        },
        {
            id: 'fullscreen',
            label: 'Full Screen',
            component: FullScreenDocComponent,
            children: [
                {
                    id: 'withthumbnails',
                    label: 'With Thumbnails',
                    component: GalleriaWithThumbnailsDemo
                },
                {
                    id: 'withtouthumbnails',
                    label: 'Without Thumbnails',
                    component: GalleriaWithoutThumbnailsDemo
                },
                {
                    id: 'customcontent',
                    label: 'Custom Content',
                    component: GalleriaFullScreenTemplateDemo
                }
            ]
        },
        {
            id: 'navigator',
            label: 'Navigator',
            component: NavigatorDocComponent,
            children: [
                {
                    id: 'itemwiththumbnails',
                    label: 'With Thumbnails',
                    component: ItemThumbnailsDocComponent
                },
                {
                    id: 'itemwithtouthumbnails',
                    label: 'Without Thumbnails',
                    component: ItemWithoutThumbnailsDocComponent
                },
                {
                    id: 'hover',
                    label: 'Display on Hover',
                    component: HoverDocComponent
                },
                {
                    id: 'withindicators',
                    label: 'With Indicators',
                    component: IndicatorsDocComponent
                }
            ]
        },
        {
            id: 'autoplay',
            label: 'AutoPlay',
            component: GalleriaAutoplayDemo
        },
        {
            id: 'caption',
            label: 'Caption',
            component: GalleriaCaptionDemo
        },
        {
            id: 'advanced',
            label: 'Advanced',
            component: GalleriaAdvancedDemo
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
            doc: [{ name: 'Galleria', pathname: '/modules/galleria.html' }]
        }
    ];
}
