import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'dynamic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A binding to the value property is required to provide messages to the component.</p>
        </app-docsectiontext>
        <div class="card">
            <button type="button" pButton pRipple (click)="addMessages()" label="Show" class="mr-2"></button>
            <button type="button" pButton pRipple (click)="clearMessages()" icon="pi pi-times" label="Clear" class="p-button-secondary"></button>
            <p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DynamicDocComponent {
    @Input() id: string;

    @Input() title: string;

    messages!: Message[];

    addMessages() {
        this.messages = [
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'info', summary: 'Info', detail: 'Message Content' },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
            { severity: 'error', summary: 'Error', detail: 'Message Content' }
        ];
    }

    clearMessages() {
        this.messages = [];
    }

    code: Code = {
        basic: `
<button type="button" pButton pRipple (click)="addMessages()" label="Show" class="mr-2"></button>
<button type="button" pButton pRipple (click)="clearMessages()" icon="pi pi-times" label="Clear" class="p-button-secondary"></button>
<p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>`,
        html: `
<div class="card">
    <button type="button" pButton pRipple (click)="addMessages()" label="Show" class="mr-2"></button>
    <button type="button" pButton pRipple (click)="clearMessages()" icon="pi pi-times" label="Clear" class="p-button-secondary"></button>
    <p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
    templateUrl: './messagesdemo.html'
})
export class MessagesDemo {
    messages!: Message[];

    addMessages() {
        this.messages = [
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'info', summary: 'Info', detail: 'Message Content' },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
            { severity: 'error', summary: 'Error', detail: 'Message Content' }
        ];
    }

    clearMessages() {
        this.messages = [];
    }
}`,
        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { MessagesDemo } from './messagesdemo';
import { MessagesDemoRoutingModule } from './messagesdemo-routing.module';

@NgModule({
    imports: [CommonModule, MessagesDemoRoutingModule, MessagesModule, ButtonModule],
    declarations: [MessagesDemo]
})
export class MessagesDemoModule {}
`
    };
}
