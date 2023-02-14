import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'animation-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Transition of the open and hide animations can be customized using the <i>showTransitionOptions</i> and <i>hideTransitionOptions</i> properties, example below disables the animations altogether.</p>
        </app-docsectiontext>
        <div class="card">
            <p-messages [(value)]="messages" [showTransitionOptions]="'500ms'" [hideTransitionOptions]="'500ms'" [enableService]="false"></p-messages>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class AnimationDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    messages!: Message[];

    ngOnInit() {
        this.messages = [
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'info', summary: 'Info', detail: 'Message Content' }
        ];
    }

    code: Code = {
        basic: `
<p-messages [(value)]="messages" [showTransitionOptions]="'500ms'" [hideTransitionOptions]="'500ms'" [enableService]="false"></p-messages>`,
        html: `
<div class="card">
    <p-messages [(value)]="messages" [showTransitionOptions]="'500ms'" [hideTransitionOptions]="'500ms'" [enableService]="false"></p-messages>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
    templateUrl: './messagesdemo.html'
})
export class MessagesDemo implements OnInit {

    messages!: Message[];

    ngOnInit(){
        this.messages = [
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'info', summary: 'Info', detail: 'Message Content' },
        ];
    }
}`,
        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageModule } from 'primeng/message';
import { MessagesDemo } from './messagesdemo';
import { MessagesDemoRoutingModule } from './messagesdemo-routing.module';

@NgModule({
    imports: [CommonModule, MessagesDemoRoutingModule, MessageModule],
    declarations: [MessagesDemo]
})
export class MessagesDemoModule {}`
    };
}
