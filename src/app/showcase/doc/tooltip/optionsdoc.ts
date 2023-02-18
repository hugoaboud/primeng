import { Component, Input } from '@angular/core';
import { TooltipOptions } from 'primeng/tooltip';
import { Code } from '../../domain/code';

@Component({
    selector: 'options-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Tooltip is also configurable by using <i>tooltipOptions</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <input type="text" pInputText pTooltip="Enter your username" [tooltipOptions]="tooltipOptions" placeholder="hover to display tooltip" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class OptionsDocComponent {
    @Input() id: string;

    @Input() title: string;

    tooltipOptions: TooltipOptions = {
        showDelay: 150,
        autoHide: false,
        tooltipEvent: 'hover',
        tooltipPosition: 'left'
    };

    code: Code = {
        basic: `
<input type="text" pInputText pTooltip="Enter your username" [tooltipOptions]="tooltipOptions" placeholder="hover to display tooltip">`,

        html: `
<div class="card flex justify-content-center">
    <input type="text" pInputText pTooltip="Enter your username" [tooltipOptions]="tooltipOptions" placeholder="hover to display tooltip">
</div>`,

        typescript: `
import { Component } from '@angular/core';
import { TooltipOptions } from 'primeng/tooltip';

@Component({
    templateUrl: './tooltipdemo.html'
})
export class TooltipDemo {

    tooltipOptions: TooltipOptions = {
        showDelay: 150,
        autoHide: false,
        tooltipEvent: 'hover',
        tooltipPosition: 'left'
    };
}`,

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
