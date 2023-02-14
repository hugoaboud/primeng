import { Component, Input } from '@angular/core';
import { MessageService } from 'src/app/components/api/messageservice';
import { Code } from '../../domain/code';

@Component({
    selector: 'responsive-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                Toast styling can be adjusted per screen size with the <i>breakpoints</i> option. The value of <i>breakpoints</i> should be an object literal whose keys are the maximum screen sizes and values are the styles per screen. In example
                below, width of the toast messages cover the whole page on screens whose widths is smaller than 921px.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-toast [breakpoints]="{ '920px': { width: '100%', right: '0', left: '0' } }"></p-toast>
            <button type="button" pButton pRipple (click)="show()" label="Show"></button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [MessageService]
})
export class ResponsiveDocComponent {
    @Input() id: string;

    @Input() title: string;

    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    code: Code = {
        basic: `
<p-toast [breakpoints]="{'920px': {width: '100%', right: '0', left: '0'}}"></p-toast>
<button type="button" pButton pRipple (click)="show()" label="Show"></button>`,
        html: `
<div class="card flex justify-content-center">
    <p-toast [breakpoints]="{'920px': {width: '100%', right: '0', left: '0'}}"></p-toast>
    <button type="button" pButton pRipple (click)="show()" label="Show"></button>
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
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
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
