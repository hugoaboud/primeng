import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { MessagesStyleDocComponent } from './messagesstyledoc';
import { MessageStyleDocComponent } from './messagestyledoc';
import { MessagesPropsDocComponent } from './messagespropsdoc';
import { MessagePropsDocComponent } from './messagepropsdoc';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SeverityDocComponent } from './severitydoc';
import { ClosableDocComponent } from './closabledoc';
import { StaticDocComponent } from './staticdoc';
import { DynamicDocComponent } from './dynamicdoc';
import { ServiceDocComponent } from './servicedoc';
import { InlineDocComponent } from './inlinedoc';
import { AnimationDocComponent } from './animationdoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, FormsModule, RouterModule, MessagesModule, ButtonModule, MessageModule, InputTextModule, AppDocModule],
    declarations: [
        BasicDocComponent,
        ImportDocComponent,
        ClosableDocComponent,
        StaticDocComponent,
        DynamicDocComponent,
        ServiceDocComponent,
        SeverityDocComponent,
        InlineDocComponent,
        MessagesStyleDocComponent,
        AnimationDocComponent,
        MessageStyleDocComponent,
        MessagesPropsDocComponent,
        MessagePropsDocComponent,
        TemplatesDocComponent
    ],
    exports: [AppDocModule]
})
export class MessagesDocModule {}
