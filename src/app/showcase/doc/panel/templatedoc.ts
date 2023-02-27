import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'template-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Header and Footers sections can be customized using <i>header</i> and <i>footer</i> templates.</p>
        </app-docsectiontext>
        <div class="card">
            <p-panel>
                <ng-template pTemplate="header"> <span class="text-primary font-semibold text-xl">Header</span></ng-template>
                Body Content
                <ng-template pTemplate="footer"> Footer content here </ng-template>
            </p-panel>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class TemplateDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-panel>
    <ng-template pTemplate="header"> <span class="text-primary font-semibold text-xl">Header</span></ng-template>
    Body Content
    <ng-template pTemplate="footer"> Footer content here </ng-template>
</p-panel>`,

        html: `
<div class="card">
    <p-panel>
        <ng-template pTemplate="header"> <span class="text-primary font-semibold text-xl">Header</span></ng-template>
        Body Content
        <ng-template pTemplate="footer"> Footer content here </ng-template>
    </p-panel>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {}`
    };
}
