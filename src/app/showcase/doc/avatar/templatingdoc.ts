import { Component, Input } from '@angular/core';
import { CodeLang } from '../../domain/codelang';

@Component({
    selector: 'templating-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
        <p>Content can easily be customized with the dynamic content instead of using the built-in modes.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-avatar>
                Content
            </p-avatar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class TemplatingDocComponent {

    @Input() id: string

    @Input() title: string

    code: CodeLang = {
        html: `
<p-avatar>
    Content
</p-avatar>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './avatardemo.html'
})

export class AvatarDemo {
}`
    };
}
