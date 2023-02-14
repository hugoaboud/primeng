import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'inline-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p><i>p-message</i> component is used to display inline messages mostly within forms.</p>
        </app-docsectiontext>
        <div class="card">
            <div class="flex justify-content-center gap-2">
                <p-message severity="info" text="Message Content"></p-message>
                <p-message severity="success" text="Message Content"></p-message>
                <p-message severity="warn" text="Message Content"></p-message>
                <p-message severity="error" text="Message Content"></p-message>
            </div>

            <div class="mt-4">
                <input type="text" pInputText placeholder="Username" class="ng-dirty ng-invalid mr-2" />
                <p-message severity="error" text="Field is required"></p-message>
            </div>

            <div class="mt-4">
                <input type="text" pInputText placeholder="Email" class="ng-dirty ng-invalid mr-2" />
                <p-message severity="error"></p-message>
            </div>

            <div class="field p-fluid mt-4">
                <label for="username">Username</label>
                <input id="username" type="username" aria-describedby="username-help" class="ng-invalid ng-dirty" pInputText />
                <small id="username-help" class="p-error">Username is not available.</small>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class InlineDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<div class="flex justify-content-center gap-2">
    <p-message severity="info" text="Message Content"></p-message>
    <p-message severity="success" text="Message Content"></p-message>  
    <p-message severity="warn" text="Message Content"></p-message>  
    <p-message severity="error" text="Message Content"></p-message>
</div>

<div class="mt-4">
    <input type="text" pInputText placeholder="Username" class="ng-dirty ng-invalid mr-2">
    <p-message severity="error" text="Field is required"></p-message>
</div>

<div class="mt-4">
    <input type="text" pInputText placeholder="Email" class="ng-dirty ng-invalid mr-2">
    <p-message severity="error"></p-message>
</div>

<div class="field p-fluid mt-4">
    <label for="username">Username</label>
    <input id="username" type="username" aria-describedby="username-help" class="ng-invalid ng-dirty" pInputText />
    <small id="username-help" class="p-error">Username is not available.</small>
</div>`,
        html: `
<div class="card">
    <div class="flex justify-content-center gap-2">
        <p-message severity="info" text="Message Content"></p-message>
        <p-message severity="success" text="Message Content"></p-message>  
        <p-message severity="warn" text="Message Content"></p-message>  
        <p-message severity="error" text="Message Content"></p-message>
    </div>

    <div class="mt-4">
        <input type="text" pInputText placeholder="Username" class="ng-dirty ng-invalid mr-2">
        <p-message severity="error" text="Field is required"></p-message>
    </div>

    <div class="mt-4">
        <input type="text" pInputText placeholder="Email" class="ng-dirty ng-invalid mr-2">
        <p-message severity="error"></p-message>
    </div>

    <div class="field p-fluid mt-4">
        <label for="username">Username</label>
        <input id="username" type="username" aria-describedby="username-help" class="ng-invalid ng-dirty" pInputText />
        <small id="username-help" class="p-error">Username is not available.</small>
    </div>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './messagesdemo.html'
})
export class MessagesDemo { }`,
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
