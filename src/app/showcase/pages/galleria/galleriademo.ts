import { Component } from '@angular/core';
import { AdvancedDocComponent } from '../../doc/galleria/advanceddoc';
import { AutoplayDocComponent } from '../../doc/galleria/autoplaydoc';
import { BasicDocComponent } from '../../doc/galleria/basicdoc';
import { CaptionDocComponent } from '../../doc/galleria/captiondoc';
import { ControlledDocComponent } from '../../doc/galleria/controlleddoc';
import { CustomContentDocComponent } from '../../doc/galleria/fullscreen/customcontentdoc';
import { FullScreenDocComponent } from '../../doc/galleria/fullscreen/fullscreendoc';
import { WithoutThumbnailsDocComponent } from '../../doc/galleria/fullscreen/withoutthumbnailsdoc';
import { WithThumbnailsDocComponent } from '../../doc/galleria/fullscreen/withthumbnailsdoc';
import { ImportDocComponent } from '../../doc/galleria/importdoc';
import { ClickEventDocComponent } from '../../doc/galleria/indicator/clickeventdoc';
import { HoverEventDocComponent } from '../../doc/galleria/indicator/hovereventdoc';
import { IndicatorDocComponent } from '../../doc/galleria/indicator/indicatordoc';
import { PositionedDocComponent } from '../../doc/galleria/indicator/positioneddoc';
import { TemplateDocComponent } from '../../doc/galleria/indicator/templatedoc';
import { HoverDocComponent } from '../../doc/galleria/navigator/hoverdoc';
import { IndicatorsDocComponent } from '../../doc/galleria/navigator/indicatorsdoc';
import { ItemThumbnailsDocComponent } from '../../doc/galleria/navigator/itemthumbnailsdoc';
import { ItemWithoutThumbnailsDocComponent } from '../../doc/galleria/navigator/itemwithoutthumbnailsdoc';
import { NavigatorDocComponent } from '../../doc/galleria/navigator/navigatordoc';
import { PropsDocComponent } from '../../doc/galleria/propsdoc';
import { ResponsiveDocComponent } from '../../doc/galleria/responsivedoc';
import { StyleDocComponent } from '../../doc/galleria/styledoc';
import { ThumbnailDocComponent } from '../../doc/galleria/thumbnaildoc';

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
            component: BasicDocComponent
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDocComponent
        },
        {
            id: 'indicator',
            label: 'Indicator',
            component: IndicatorDocComponent,
            children: [
                {
                    id: 'clickevent',
                    label: 'Click Event',
                    component: ClickEventDocComponent
                },
                {
                    id: 'hoverevent',
                    label: 'Hover Event',
                    component: HoverEventDocComponent
                },
                {
                    id: 'positioned',
                    label: 'Positioned',
                    component: PositionedDocComponent
                },
                {
                    id: 'template',
                    label: 'Templating',
                    component: TemplateDocComponent
                }
            ]
        },
        {
            id: 'thumbnail',
            label: 'Thumbnail',
            component: ThumbnailDocComponent
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDocComponent
        },
        {
            id: 'fullscreen',
            label: 'Full Screen',
            component: FullScreenDocComponent,
            children: [
                {
                    id: 'withthumbnails',
                    label: 'With Thumbnails',
                    component: WithThumbnailsDocComponent
                },
                {
                    id: 'withtouthumbnails',
                    label: 'Without Thumbnails',
                    component: WithoutThumbnailsDocComponent
                },
                {
                    id: 'customcontent',
                    label: 'Custom Content',
                    component: CustomContentDocComponent
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
            component: AutoplayDocComponent
        },
        {
            id: 'caption',
            label: 'Caption',
            component: CaptionDocComponent
        },
        {
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        },
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
