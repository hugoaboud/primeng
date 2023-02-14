import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'static-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Alternative way to provide the content for the messages is templating. In this case value property and message service is ignored and only static is displayed.</p>
        </app-docsectiontext>
        <div class="card">
            <p-messages severity="info">
                <ng-template pTemplate>
                    <img src="assets/showcase/images/primeng.svg" width="32" />
                    <div class="ml-2">Always bet on Prime.</div>
                </ng-template>
            </p-messages>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class StaticDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-messages severity="info">
    <ng-template pTemplate>
        <img src="assets/showcase/images/primeng.svg" width="32" />
        <div class="ml-2">Always bet on Prime.</div>
    </ng-template>
</p-messages>`,
        html: `
<div class="card">
    <p-messages severity="info">
        <ng-template pTemplate>
            <img src="assets/showcase/images/primeng.svg" width="32" />
            <div class="ml-2">Always bet on Prime.</div>
        </ng-template>
    </p-messages>
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
import { MessagesModule } from 'primeng/messages';
import { MessagesDemo } from './messagesdemo';
import { MessagesDemoRoutingModule } from './messagesdemo-routing.module';

@NgModule({
    imports: [CommonModule, MessagesDemoRoutingModule, MessagesModule],
    declarations: [MessagesDemo]
})
export class MessagesDemoModule {}
`,
    };
}
