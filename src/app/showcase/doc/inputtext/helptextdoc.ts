import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDocSectionTextModule } from 'src/app/showcase/layout/doc//docsectiontext/app.docsectiontext.component';

interface CodeLang {
    html?: string;
    typescript?: string;
    scss?: string;
    data?: string;
}

@Component({
    selector: 'helptext-doc',
    template: ` <div>
        <app-docsectiontext title="Help Text"> An advisory text can be defined with the semantic <i>small</i> tag. </app-docsectiontext>
        <div class="card flex justify-content-center">
            <div class="flex flex-column gap-2">
                <label htmlFor="username">Username</label>
                <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value1" />
                <small id="username-help">Enter your username to reset your password.</small>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class HelpTextDocComponent {
    value1: string;

    code: CodeLang = {
        html: `
<div class="flex flex-column gap-2">
    <label htmlFor="username">Username</label>
    <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value1" />
    <small id="username-help">Enter your username to reset your password.</small>
</div>`,

        typescript: `
export class InputText {
    value:1 string;
}`
    };
}

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocSectionTextModule, InputTextModule, FormsModule],
    exports: [HelpTextDocComponent],
    declarations: [HelpTextDocComponent]
})
export class HelpTextDocModule {}
