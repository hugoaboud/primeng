import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'delay-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Adding delays to the show and hide events are defined with <i>showDelay</i> and <i>hideDelay</i> options respectively.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <input type="text" pInputText pTooltip="Enter your username" showDelay="1000" hideDelay="1000" placeholder="hover to display tooltip" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DelayDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<input type="text" pInputText pTooltip="Enter your username" showDelay="1000" hideDelay="1000" placeholder="hover to display tooltip">`,

        html: `
<div class="card flex justify-content-center">
    <input type="text" pInputText pTooltip="Enter your username" showDelay="1000" hideDelay="1000" placeholder="hover to display tooltip">
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
