import { Component, Input } from '@angular/core';
import { CodeLang } from '../../domain/codelang';

@Component({
    selector: 'shape-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Avatar comes in two different styles specified with the <i>shape</i> property, "square" is the default and "circle" is the alternative.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-avatar label="P" shape="circle"></p-avatar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class ShapeDocComponent {

    @Input() id: string

    @Input() title: string

    code: CodeLang = {
        html: `
    <p-avatar label="P" shape="circle"></p-avatar>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './avatardemo.html'
})

export class AvatarDemo {
}`
    };
}
