import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'event-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Tooltip gets displayed on <i>hover</i> event of its target by default, other option is the <i>focus</i> event to display and blur to hide.</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap justify-content-center gap-2">
            <input type="text" pInputText pTooltip="Enter your username" tooltipEvent="focus" placeholder="focus to display tooltip" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class EventDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<input type="text" pInputText pTooltip="Enter your username" tooltipEvent="focus" placeholder="focus to display tooltip">`,

        html: `
<div class="card flex justify-content-center">
    <input type="text" pInputText pTooltip="Enter your username" tooltipEvent="focus" placeholder="focus to display tooltip">
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
