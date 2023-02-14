import { Component, Input } from '@angular/core';
import { MessageService } from 'src/app/components/api/messageservice';
import { Code } from '../../domain/code';

@Component({
    selector: 'clear-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                Clicking the close icon on the toast, removes it manually. Same can also be achieved programmatically using the clear function of the <i>messageService</i>. Calling it without any arguments, removes all displayed messages whereas
                calling it with a key, removes the messages displayed on a toast having the same key.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-2">
            <p-toast key="myKey"></p-toast>
            <button type="button" pButton pRipple (click)="show()" label="Show"></button>
            <button type="button" pButton pRipple (click)="clear()" label="Clear" class="p-button-secondary"></button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [MessageService]
})
export class ClearDocComponent {
    @Input() id: string;

    @Input() title: string;

    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ key: 'myKey', severity: 'success', summary: 'Message 1', detail: 'Message Content' });
    }

    clear() {
        this.messageService.clear();
    }

    code: Code = {
        basic: `
<p-toast></p-toast>
<button type="button" pButton pRipple (click)="show()" label="Show"></button>
<button type="button" pButton pRipple (click)="clear()" label="Clear" class="p-button-secondary"></button>`,
        html: `
<div class="card flex justify-content-center gap-2">
    <p-toast></p-toast>
    <button type="button" pButton pRipple (click)="show()" label="Show"></button>
    <button type="button" pButton pRipple (click)="clear()" label="Clear" class="p-button-secondary"></button>
</div>`,
        typescript: `
import { Component } from '@angular/core';
import { MessageService } from 'src/app/components/api/messageservice';

@Component({
    templateUrl: './toastdemo.html',
    providers: [MessageService]
})
export class ToastDemo {

    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ key:'myKey', severity: 'success', summary: 'Message 1', detail: 'Message Content' });
    }

    clear() {
        this.messageService.clear();
    }
}`,
        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastDemo } from './toastdemo';

@NgModule({
    imports: [CommonModule, ToastModule, ButtonModule, RippleModule],
    declarations: [ToastDemo]
})
export class ToastDemoModule {}`
    };
}
