import { Component, Input } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>ConfirmDialog is defined using <i>p-confirmDialog</i> tag and an instance of <i>ConfirmationService</i> is required to display it bycalling confirm method.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-2">
            <p-toast></p-toast>
            <p-confirmDialog [style]="{ width: '50vw' }"></p-confirmDialog>
            <p-button pRipple (click)="confirm1()" icon="pi pi-check" label="Confirm"></p-button>
            <p-button pRipple (click)="confirm2()" icon="pi pi-times" label="Delete"></p-button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [ConfirmationService, MessageService]
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            },
            reject: (type) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                        break;
                }
            }
        });
    }

    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            },
            reject: (type) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                        break;
                }
            }
        });
    }

    code: Code = {
        basic: `
<p-toast></p-toast>
<p-confirmDialog [style]="{width: '50vw'}"></p-confirmDialog>
<p-button pRipple (click)="confirm1()" icon="pi pi-check" label="Confirm"></p-button>
<p-button pRipple (click)="confirm2()" icon="pi pi-times" label="Delete" class="p-button-danger"></p-button>`,

        html: `
<div class="card flex justify-content-center gap-2">
    <p-toast></p-toast>
    <p-confirmDialog [style]="{width: '50vw'}"></p-confirmDialog>
    <p-button pRipple (click)="confirm1()" icon="pi pi-check" label="Confirm"></p-button>
    <p-button pRipple (click)="confirm2()" icon="pi pi-times" label="Delete" class="p-button-danger"></p-button>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Code } from '../../domain/code';
        
@Component({
    templateUrl: './confirmdialogdemo.html',
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogDemo {

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            },
            reject: (type) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                        break;
                }
            }
        });
    }

    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            },
            reject: (type) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                        break;
                }
            }
        });
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmDialogDemo } from './confirmdialogdemo';

@NgModule({
    imports: [CommonModule, ConfirmDialogModule, ButtonModule, ToastModule],
    declarations: [ConfirmDialogDemo],
})
export class ConfirmDialogDemoModule {}`
    };
}
