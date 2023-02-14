import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                A single message is specified by <i>Message</i> interface in PrimeNG that defines the <i>id</i>, <i>severity</i>, <i>summary</i> and <i>detail</i> as the properties. Messages to display can either be defined using the value property
                which should an array of Message instances or using a <i>MessageService</i> are defined using the <i>value</i> property which should an array of Message instances.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    messages!: Message[];

    ngOnInit() {
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];
    }

    code: Code = {
        basic: `
<p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>`,
        html: `
<div class="card">
    <p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
    templateUrl: './messagesdemo.html'
})
export class MessagesDemo implements OnInit {
    messages!: Message[];

    ngOnInit() {
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];
    }
}`,
        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { MessagesDemo } from './messagesdemo';
import { MessagesDemoRoutingModule } from './messagesdemo-routing.module';

@NgModule({
    imports: [CommonModule, MessagesDemoRoutingModule, MessagesModule],
    declarations: [MessagesDemo]
})
export class MessagesDemoModule {}`
    };
}
