import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'size-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p><i>size</i> property defines the size of the Avatar with <i>large</i> and <i>xlarge</i> as possible values.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-avatar label="P" size="large"></p-avatar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class SizeDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<p-avatar label="P" size="large"></p-avatar>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './avatardemo.html'
})

export class AvatarDemo {
}`
    };
}
