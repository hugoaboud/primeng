import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'severity-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>The <i>severity</i> option specifies the type of the message.</p>
        </app-docsectiontext>
        <div class="card">
            <p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class SeverityDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    messages!: Message[];

    ngOnInit() {
        this.messages = [
            { severity: 'info', summary: 'Info', detail: 'Message Content' },
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
            { severity: 'error', summary: 'Error', detail: 'Message Content' }
        ];
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
        this.messages = [
            { severity: 'info', summary: 'Info', detail: 'Message Content' },
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
            { severity: 'error', summary: 'Error', detail: 'Message Content' },
        ];
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
export class MessagesDemoModule {}
`
    };
}
