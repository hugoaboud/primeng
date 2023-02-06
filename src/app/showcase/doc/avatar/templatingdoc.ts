import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'templating-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Content can easily be customized with the dynamic content instead of using the built-in modes.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-avatar size="xlarge">
                <span class="text-base">Content</span>
            </p-avatar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class TemplatingDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card flex justify-content-center">
    <p-avatar size="xlarge">
        <span class="text-base">Content</span>
    </p-avatar>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './avatardemo.html'
})

export class AvatarDemo {
}`
    };
}
