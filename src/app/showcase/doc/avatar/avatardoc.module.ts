import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextModule } from 'primeng/inputtext';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AvatarGroupDemo } from './avatargroupdoc';
import { AvatarIconDemo } from './icondoc';
import { AvatarImageDemo } from './imagedoc';
import { ImportDocComponent } from './importdoc';
import { AvatarLabelDemo } from './labeldoc';
import { AvatarStyleDocComponent } from './avatarstyledoc';
import { AvatarShapeDemo } from './shapedoc';
import { AvatarSizeDemo } from './sizedoc';
import { AvatarBadgeDemo } from './badgedoc';
import { AvatarTemplatingDemo } from './templatingdoc';
import { AvatarGroupStyleDocComponent } from './avatargroupstyledoc';
import { AvatarPropsDocComponent } from './avatarpropsdoc';
import { AvatarGroupPropsDocComponent } from './avatargrouppropsdoc';
import { EventsDocComponent } from './eventsdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, InputTextModule, FormsModule, AppDocModule, AvatarModule, AvatarGroupModule, BadgeModule],
    declarations: [
        ImportDocComponent,
        AvatarLabelDemo,
        AvatarIconDemo,
        AvatarGroupDemo,
        AvatarImageDemo,
        AvatarStyleDocComponent,
        AvatarGroupStyleDocComponent,
        AvatarShapeDemo,
        AvatarSizeDemo,
        AvatarBadgeDemo,
        AvatarTemplatingDemo,
        AvatarPropsDocComponent,
        AvatarGroupPropsDocComponent,
        EventsDocComponent
    ],
    exports: [AppDocModule]
})
export class AvatarDocModule {}
