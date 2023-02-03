import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { KeyFilterModule } from "primeng/keyfilter";
import { AppCodeModule } from "../../layout/doc/code/app.code.component";
import { AppDocSectionTextModule } from "../../layout/doc/docsectiontext/app.docsectiontext.component";

interface CodeLang {
    html?: string,
    typescript?: string,
    scss?: string,
    data?: string,
}

@Component({
    selector: 'keyfilter-doc',
    template: `
<div>
    <app-docsectiontext title="Key Filter">
<p>InputText has built-in key filtering support to block certain keys, refer to <a href="/keyfilter">keyfilter</a> page for more information.</p>
    </app-docsectiontext>
    <div class="card flex justify-content-center">
        <input pInputText pKeyFilter="int" placeholder="Integers" [(ngModel)]="value1" />
    </div>
    <app-code [code]="code"></app-code>
</div>`
})
export class KeyFilterDocComponent {
    value1: string;

    code: CodeLang = {
        html: `
<input pInputText pKeyFilter="int" placeholder="Integers" [(ngModel)]="value1" />`,

        typescript: `
export class InputText {
    value:1 string;
}`,
    }
}

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocSectionTextModule, InputTextModule, FormsModule, KeyFilterModule],
    exports: [KeyFilterDocComponent],
    declarations: [KeyFilterDocComponent]
})
export class KeyFilterDocModule { }