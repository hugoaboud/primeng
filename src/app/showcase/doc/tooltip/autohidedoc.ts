import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'autohide-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Tooltip is hidden when mouse leaves the target element, in cases where tooltip needs to be interacted with, set <i>autoHide</i> to false to change the default behavior.</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap justify-content-center gap-2">
            <input type="text" pInputText pTooltip="Enter your username" [autoHide]="false" placeholder="autoHide: false" />
            <input type="text" pInputText pTooltip="Enter your username" placeholder="autoHide: true" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class AutoHideDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<input type="text" pInputText pTooltip="Enter your username" [autoHide]="false" placeholder="autoHide: false">
<input type="text" pInputText pTooltip="Enter your username" placeholder="autoHide: true">`,

        html: `
<div class="card flex flex-wrap justify-content-center gap-2">
    <input type="text" pInputText pTooltip="Enter your username" [autoHide]="false" placeholder="autoHide: false">
    <input type="text" pInputText pTooltip="Enter your username" placeholder="autoHide: true">
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './tooltipdemo.html'
})
export class TooltipDemo {}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipDemo } from './tooltipdemo';

@NgModule({
    imports: [CommonModule, TooltipModule, InputTextModule],
    declarations: [TooltipDemo]
})
export class TooltipDemoModule {}`
    };
}
