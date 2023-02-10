import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'indeterminate-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>For progresses with no value to track, set the <i>mode</i> property to <i>indeterminate</i>.</p>
        </app-docsectiontext>
        <div class="card">
            <p-progressBar mode="indeterminate" [style]="{ height: '6px' }"></p-progressBar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class IndeterminateDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-progressBar mode="indeterminate" [style]="{ height: '6px' }"></p-progressBar>`,
        html: `
<div class="card">
    <p-progressBar mode="indeterminate" [style]="{'height': '6px'}"></p-progressBar>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './progressbardemo.html'
})

export class ProgressBarDemo {}`
    };
}
