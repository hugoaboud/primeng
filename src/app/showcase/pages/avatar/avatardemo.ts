import { Component } from '@angular/core';
import { ImportDocComponent } from 'src/app/showcase/doc/avatar/importdoc';
import { LabelDocComponent } from 'src/app/showcase/doc/avatar/labeldoc';
import { AvatarGroupDocComponent } from '../../doc/avatar/avatargroupdoc';
import { AvatarStyleDocComponent } from '../../doc/avatar/avatarstyledoc';
import { AvatarGroupStyleDocComponent } from '../../doc/avatar/avatargroupstyledoc';
import { IconDocComponent } from '../../doc/avatar/icondoc';
import { ImageDocComponent } from '../../doc/avatar/imagedoc';
import { ShapeDocComponent } from '../../doc/avatar/shapedoc';
import { SizeDocComponent } from '../../doc/avatar/sizedoc';
import { BadgeDocComponent } from '../../doc/avatar/badgedoc';
import { TemplatingDocComponent } from '../../doc/avatar/templatingdoc';
import { AvatarPropsDocComponent } from '../../doc/avatar/avatarpropsdoc';
import { AvatarGroupPropsDocComponent } from '../../doc/avatar/avatargrouppropsdoc';

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
            component: LabelDocComponent
        },
        {
            id: 'icon',
            label: 'Icon',
            component: IconDocComponent
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDocComponent
        },
        {
            id: 'size',
            label: 'Sizes',
            component: SizeDocComponent
        },
        {
            id: 'avatargroup',
            label: 'AvatarGroup',
            component: AvatarGroupDocComponent
        },
        {
            id: 'shape',
            label: 'Shape',
            component: ShapeDocComponent
        },
        {
            id: 'badge',
            label: 'Badge',
            component: BadgeDocComponent
        },
        {
            id: 'templating',
            label: 'Templating',
            component: TemplatingDocComponent
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
        },
        {
            id: 'avatarprops',
            label: 'Properties of Avatar',
            component: AvatarPropsDocComponent
        },
        {
            id: 'avatargroupprops',
            label: 'Properties of AvatarGroup',
            component: AvatarGroupPropsDocComponent
        }
    ];
}
