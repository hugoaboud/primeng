import { Component, Input } from '@angular/core';
import { MessageService } from 'src/app/components/api/messageservice';
import { Code } from '../../domain/code';

@Component({
    selector: 'animation-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Transition of the animations can be customized using the <i>showTransitionOptions</i>, <i>hideTransitionOptions</i>, <i>showTransformOptions</i> and <i>hideTransformOptions</i> properties.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-toast [showTransformOptions]="'translateY(100%)'" [showTransitionOptions]="'1000ms'" [hideTransitionOptions]="'1000ms'" [showTransformOptions]="'translateX(100%)'"></p-toast>
            <button type="button" pButton pRipple (click)="show()" label="Show"></button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [MessageService]
})
export class AnimationDocComponent {
    @Input() id: string;

    @Input() title: string;

    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    code: Code = {
        basic: `
<p-toast [showTransformOptions]="'translateY(100%)'" [showTransitionOptions]="'1000ms'" [hideTransitionOptions]="'1000ms'" [showTransformOptions]="'translateX(100%)'"></p-toast>
<button type="button" pButton pRipple (click)="show()" label="Show"></button>`,
        html: `
<div class="card flex justify-content-center">
    <p-toast [showTransformOptions]="'translateY(100%)'" [showTransitionOptions]="'1000ms'" [hideTransitionOptions]="'1000ms'" [showTransformOptions]="'translateX(100%)'"></p-toast>
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
