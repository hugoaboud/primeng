import { Component } from '@angular/core';
import { ImportDocComponent } from 'src/app/showcase/doc/avatar/importdoc';
import { AvatarLabelDemo } from 'src/app/showcase/doc/avatar/labeldoc';
import { AvatarGroupDemo } from '../../doc/avatar/avatargroupdoc';
import { AvatarStyleDocComponent } from '../../doc/avatar/avatarstyledoc';
import { AvatarGroupStyleDocComponent } from '../../doc/avatar/avatargroupstyledoc';
import { AvatarIconDemo } from '../../doc/avatar/icondoc';
import { AvatarImageDemo } from '../../doc/avatar/imagedoc';
import { AvatarShapeDemo } from '../../doc/avatar/shapedoc';
import { AvatarSizeDemo } from '../../doc/avatar/sizedoc';
import { AvatarBadgeDemo } from '../../doc/avatar/badgedoc';
import { AvatarTemplatingDemo } from '../../doc/avatar/templatingdoc';
import { AvatarPropsDocComponent } from '../../doc/avatar/avatarpropsdoc';
import { AvatarGroupPropsDocComponent } from '../../doc/avatar/avatargrouppropsdoc';
import { EventsDocComponent } from '../../doc/avatar/eventsdoc';

@Component({
    templateUrl: './avatardemo.html'
})
export class AvatarDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'label',
            label: 'Label',
            component: AvatarLabelDemo
        },
        {
            id: 'icon',
            label: 'Icon',
            component: AvatarIconDemo
        },
        {
            id: 'image',
            label: 'Image',
            component: AvatarImageDemo
        },
        {
            id: 'size',
            label: 'Sizes',
            component: AvatarSizeDemo
        },
        {
            id: 'avatargroup',
            label: 'AvatarGroup',
            component: AvatarGroupDemo
        },
        {
            id: 'shape',
            label: 'Shape',
            component: AvatarShapeDemo
        },
        {
            id: 'badge',
            label: 'Badge',
            component: AvatarBadgeDemo
        },
        {
            id: 'templating',
            label: 'Custom Content',
            component: AvatarTemplatingDemo
        },
        {
            id: 'stylingofavatar',
            label: 'Styling of Avatar',
            component: AvatarStyleDocComponent
        },
        {
            id: 'stylingofavatargroup',
            label: 'Styling of AvatarGroup',
            component: AvatarGroupStyleDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'avatarprops',
            label: 'Properties of Avatar',
            component: AvatarPropsDocComponent
        },
        {
            id: 'avatargroupprops',
            label: 'Properties of AvatarGroup',
            component: AvatarGroupPropsDocComponent
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Avatar', pathname: '/modules/avatar.html' }]
        }
    ];
}
