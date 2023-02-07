import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'template-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A chip is customized using a <i>ng-template</i> element where the value is passed as the implicit variable.</p>
        </app-docsectiontext>
        <div class="card p-fluid">
            <p-chips [(ngModel)]="values">
                <ng-template let-item pTemplate="item"> {{ item }} - (active) <i class="pi pi-user ml-2"></i> </ng-template>
            </p-chips>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class TemplateDocComponent {
    @Input() id: string;

    @Input() title: string;

    values: string[];

    code: Code = {
        html: `
<div class="card p-fluid">
    <p-chips [(ngModel)]="values">
        <ng-template let-item pTemplate="item"> {{ item }} - (active) <i class="pi pi-user ml-2"></i> </ng-template>
    </p-chips>
</div>`,
        typescript: `
values: string[];`
    };
}
