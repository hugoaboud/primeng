import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { AppCodeModule } from "../../layout/doc/code/app.code.component";
import { AppDocSectionTextModule } from "../../layout/doc/docsectiontext/app.docsectiontext.component";

interface CodeLang {
    html?: string,
    typescript?: string,
    scss?: string,
    data?: string,
}

@Component({
    selector: 'invalid-doc',
    template: `
<div>
    <app-docsectiontext title="Invalid">
        <p>Invalid state style is added using the <i>p-invalid</i> and <i>p-dirty</i> class to indicate a failed validation.</p>
    </app-docsectiontext>
    <div class="card flex justify-content-center">
        <input pInputText class="ng-invalid ng-dirty" [(ngModel)]="value1" />
    </div>
    <app-code [code]="code"></app-code>
</div>`
})
export class InvalidDocComponent {
    value1: string;

    code: CodeLang = {
        html: `
<input pInputText class="ng-invalid ng-dirty" [(ngModel)]="value1" />
`,

        typescript: `
export class InputText {
    value:1 string;
}`,
    }
}

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocSectionTextModule, InputTextModule, FormsModule],
    exports: [InvalidDocComponent],
    declarations: [InvalidDocComponent]
})
export class InvalidDocModule { }