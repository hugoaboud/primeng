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
    selector: 'import-doc',
    template: `
<div>
    <app-docsectiontext title="Import">
    </app-docsectiontext>
    <app-code [hideToggleCode]="true" [hideStackBlitz]="true" [hideCodeSandbox]="true" [code]="code"></app-code>
</div>`
})
export class ImportDocComponent {
    value1: string;

    code: CodeLang = {
        html: `
        import { InputTextModule } from 'primeng/inputtext';
        `,
    }
}

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocSectionTextModule, InputTextModule, FormsModule],
    exports: [ImportDocComponent],
    declarations: [ImportDocComponent]
})
export class ImportDocModule { }