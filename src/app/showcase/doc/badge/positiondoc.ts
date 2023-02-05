import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'position-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A Badge can be positioned at the top right corner of an element by adding <i>p-overlay-badge</i> style class to the element and embedding the badge inside.</p>
            <div class="card flex justify-content-center">
                <i class="pi pi-bell mr-4 p-text-secondary" pBadge style="font-size: 2rem" value="2"></i>
                <i class="pi pi-calendar mr-4 p-text-secondary" pBadge style="font-size: 2rem" [value]="'10+'" severity="danger"></i>
                <i class="pi pi-envelope p-text-secondary" pBadge style="font-size: 2rem" severity="danger"></i>
            </div>
        </app-docsectiontext>
        <app-code [code]="code"></app-code>
    </div>`
})
export class PositionDocComponent {

    @Input() id: string

    @Input() title: string

    code: Code = {
        html: `
<i class="pi pi-bell mr-4 p-text-secondary" pBadge style="font-size: 2rem" value="2"></i>
<i class="pi pi-calendar mr-4 p-text-secondary" pBadge style="font-size: 2rem" [value]="'10+'" severity="danger"></i>
<i class="pi pi-envelope p-text-secondary" pBadge style="font-size: 2rem" severity="danger"></i>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './badgedemo.html'
})

export class BadgeDemo {
}`
    };
}
