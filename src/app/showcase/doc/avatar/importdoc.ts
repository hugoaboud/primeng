import { Component, Input } from '@angular/core';
import { CodeLang } from '../../domain/codelang';

@Component({
    selector: 'import-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"> </app-docsectiontext>
        <app-code [code]="code"></app-code>
    </div>`
})
export class ImportDocComponent {

    @Input() id: string

    @Input() title: string

    code: CodeLang = {
        html: `
import { AvatarModule } from 'primeng/avatar';`
    };
}
