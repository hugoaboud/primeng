import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDocComponent } from './importdoc';
import { MessagesBasicDemo } from './basicdoc';
import { MessagesStyleDocComponent } from './messagesstyledoc';
import { MessageStyleDocComponent } from './messagestyledoc';
import { MessagesPropsDocComponent } from './messagespropsdoc';
import { MessagePropsDocComponent } from './messagepropsdoc';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesSeverityDemo } from './severitydoc';
import { MessagesClosableDemo } from './closabledoc';
import { MessagesStaticDemo } from './staticdoc';
import { MessagesDynamicDemo } from './dynamicdoc';
import { MessagesServiceDemo } from './servicedoc';
import { MessagesInlineDemo } from './inlinedoc';
import { MessagesAnimationDemo } from './animationdoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, FormsModule, RouterModule, MessagesModule, ButtonModule, MessageModule, InputTextModule, AppDocModule],
    declarations: [
        MessagesBasicDemo,
        ImportDocComponent,
        MessagesClosableDemo,
        MessagesStaticDemo,
        MessagesDynamicDemo,
        MessagesServiceDemo,
        MessagesSeverityDemo,
        MessagesInlineDemo,
        MessagesStyleDocComponent,
        MessagesAnimationDemo,
        MessageStyleDocComponent,
        MessagesPropsDocComponent,
        MessagePropsDocComponent,
        TemplatesDocComponent
    ],
    exports: [AppDocModule]
})
export class MessagesDocModule {}
