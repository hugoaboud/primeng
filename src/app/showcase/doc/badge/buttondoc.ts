import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'button-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Buttons have built-in support for badges to display a badge inline.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-button label="Emails" badge="8" styleClass="mr-2"></p-button>
            <p-button label="Messages" icon="pi pi-users" styleClass="p-button-warning" badge="8" badgeClass="p-badge-danger"></p-button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class ButtonDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card flex justify-content-center">
    <p-button label="Emails" badge="8" styleClass="mr-2"></p-button>
    <p-button label="Messages" icon="pi pi-users" styleClass="p-button-warning" badge="8" badgeClass="p-badge-danger"></p-button>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './badgedemo.html'
})

export class BadgeDemo {
}`
    };
}
