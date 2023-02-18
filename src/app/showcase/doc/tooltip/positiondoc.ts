import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'position-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Position of the tooltip is specified using <i>tooltipPosition</i> attribute. Valid values are <i>top</i>, <i>bottom</i>, <i>right</i> and <i>left</i>. Default position of the tooltip is <i>right</i>.</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap justify-content-center gap-2">
            <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="right" placeholder="Right" />
            <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="left" placeholder="Left" />
            <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="top" placeholder="Top" />
            <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="bottom" placeholder="Bottom" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class PositionDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="right" placeholder="Right">
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="left" placeholder="Left">
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="top" placeholder="Top">
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="bottom" placeholder="Bottom">`,

        html: `
<div class="card flex flex-wrap justify-content-center gap-2">
    <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="right" placeholder="Right">
    <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="left" placeholder="Left">
    <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="top" placeholder="Top">
    <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="bottom" placeholder="Bottom">
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
