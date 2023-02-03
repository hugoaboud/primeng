import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDocSectionTextModule } from 'src/app/showcase/layout/doc/docsectiontext/app.docsectiontext.component';

interface CodeLang {
    html?: string;
    typescript?: string;
    scss?: string;
    data?: string;
}

@Component({
    selector: 'disabled-doc',
    template: ` <div>
        <app-docsectiontext title="Disabled">
            <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <input id="disabled-input" type="text" pInputText [disabled]="true" [(ngModel)]="value1" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DisabledDocComponent {
    value1: string;
    value2: string;

    code: CodeLang = {
        html: `
<input id="disabled-input" type="text" pInputText [disabled]="true" [(ngModel)]="value1" />`,

        typescript: `
export class InputText {
    value:1 string;
}`
    };
}

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocSectionTextModule, InputTextModule, FormsModule],
    exports: [DisabledDocComponent],
    declarations: [DisabledDocComponent]
})
export class DisabledDocModule {}
