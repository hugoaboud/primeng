import { Component, Input } from '@angular/core';
import { MessageService } from 'src/app/components/api/messageservice';
import { Code } from '../../domain/code';

@Component({
    selector: 'multiple-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Multiple toasts are displayed by passing an array to the <i>showAll</i> method of the <i>messageService</i>.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-toast></p-toast>
            <button type="button" pButton pRipple (click)="showMultiple()" label="Show Multiple"></button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [MessageService]
})
export class MultipleDocComponent {
    @Input() id: string;

    @Input() title: string;

    constructor(private messageService: MessageService) {}

    showMultiple() {
        this.messageService.addAll([
            { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
            { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
            { severity: 'warn', summary: 'Message 3', detail: 'Message Content' }
        ]);
    }

    code: Code = {
        basic: `
<p-toast></p-toast>
<button type="button" pButton pRipple (click)="showMultiple()" label="Show Multiple"></button>`,
        html: `
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <button type="button" pButton pRipple (click)="showMultiple()" label="Show Multiple"></button>
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

    showMultiple() {
        this.messageService.addAll([
            { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
            { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
            { severity: 'warn', summary: 'Message 3', detail: 'Message Content' }
        ]);
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
