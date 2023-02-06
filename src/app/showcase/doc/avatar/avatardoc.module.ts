import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextModule } from 'primeng/inputtext';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AvatarGroupDocComponent } from './avatargroupdoc';
import { IconDocComponent } from './icondoc';
import { ImageDocComponent } from './imagedoc';
import { ImportDocComponent } from './importdoc';
import { LabelDocComponent } from './labeldoc';
import { AvatarStyleDocComponent } from './avatarstyledoc';
import { ShapeDocComponent } from './shapedoc';
import { SizeDocComponent } from './sizedoc';
import { BadgeDocComponent } from './badgedoc';
import { TemplatingDocComponent } from './templatingdoc';
import { AvatarGroupStyleDocComponent } from './avatargroupstyledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, InputTextModule, FormsModule, AppDocModule, AvatarModule, AvatarGroupModule],
    declarations: [
        ImportDocComponent,
        LabelDocComponent,
        IconDocComponent,
        AvatarGroupDocComponent,
        ImageDocComponent,
        AvatarStyleDocComponent,
        AvatarGroupStyleDocComponent,
        ShapeDocComponent,
        SizeDocComponent,
        BadgeDocComponent,
        TemplatingDocComponent
    ],
    exports: [
        ImportDocComponent,
        LabelDocComponent,
        IconDocComponent,
        AvatarGroupDocComponent,
        ImageDocComponent,
        AvatarStyleDocComponent,
        AvatarGroupStyleDocComponent,
        ShapeDocComponent,
        SizeDocComponent,
        BadgeDocComponent,
        TemplatingDocComponent
    ]
})
export class AvatarDocModule {}
