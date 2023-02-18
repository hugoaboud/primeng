import { Component, Input } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>ConfirmDialog is defined using <i>p-confirmDialog</i> tag and an instance of <i>ConfirmationService</i> is required to display it bycalling confirm method.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-2">
            <p-toast></p-toast>
            <p-confirmPopup></p-confirmPopup>
            <p-button (click)="confirm($event)" icon="pi pi-check" label="Confirm"></p-button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [ConfirmationService, MessageService]
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target,
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            }
        });
    }

    code: Code = {
        basic: `
<p-toast></p-toast>
<p-confirmPopup></p-confirmPopup>
<p-button (click)="confirm($event)" icon="pi pi-check" label="Confirm"></p-button>`,

        html: `
<div class="card flex justify-content-center gap-2">
    <p-toast></p-toast>
    <p-confirmPopup></p-confirmPopup>
    <p-button (click)="confirm($event)" icon="pi pi-check" label="Confirm"></p-button>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Code } from '../../domain/code';
        
@Component({
    templateUrl: './confirmpopupdemo.html',
    providers: [ConfirmationService, MessageService]
})
export class ConfirmPopupDemo {

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
    
    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target,
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            }
        });
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmPopupDemo } from './confirmpopupdemo';

@NgModule({
    imports: [CommonModule, ConfirmPopupModule, ButtonModule, ToastModule],
    declarations: [ConfirmPopupDemo],
})
export class ConfirmPopupDemoModule {}`
    };
}
