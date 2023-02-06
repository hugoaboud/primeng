import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Value is reactive so updating it dynamically changes the bar as well.</p>
        </app-docsectiontext>
        <div class="card">
            <p-toast></p-toast>
            <p-progressBar [value]="value"></p-progressBar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [MessageService]
})
export class DynamicDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    value: number = 0;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        let interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 100;
                this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                clearInterval(interval);
            }
        }, 2000);
    }

    code: Code = {
        html: `
<div class="card">
    <p-toast></p-toast>
    <p-progressBar [value]="50"></p-progressBar>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './progressbardemo.html',
    providers: [MessageService]
})

export class ProgressBarDemo implements OnInit {
    value: number = 0;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        let interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 100;
                this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                clearInterval(interval);
            }
        }, 2000);
    }
}`
    };
}
