import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'badge-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A <i>badge</i> can be added to an Avatar with the <a href="#" [routerLink]="['/badge']">Badge</a> directive.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-avatar image="assets/showcase/images/demo/avatar/amyelsner.png" pBadge value="4" severity="danger"></p-avatar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BadgeDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-avatar image="assets/showcase/images/demo/avatar/amyelsner.png" pBadge value="4" severity="danger"></p-avatar>`,
        html: `
<div class="card flex justify-content-center">
    <p-avatar image="assets/showcase/images/demo/avatar/amyelsner.png" pBadge value="4" severity="danger"></p-avatar>
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
