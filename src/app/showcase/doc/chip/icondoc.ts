import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'icon-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A font icon next to the label can be displayed with the <i>icon</i> property.</p>
            <div class="card flex align-items-center gap-2">
                <p-chip label="Apple" icon="pi pi-apple"></p-chip>
                <p-chip label="Facebook" icon="pi pi-facebook"></p-chip>
                <p-chip label="Google" icon="pi pi-google"></p-chip>
                <p-chip label="Microsoft" icon="pi pi-microsoft" [removable]="true"></p-chip>
            </div>
        </app-docsectiontext>
        <app-code [code]="code"></app-code>
    </div>`
})
export class IconDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card flex align-items-center gap-2">
    <p-chip label="Apple" icon="pi pi-apple"></p-chip>
    <p-chip label="Facebook" icon="pi pi-facebook"></p-chip>
    <p-chip label="Google" icon="pi pi-google"></p-chip>
    <p-chip label="Microsoft" icon="pi pi-microsoft" [removable]="true"></p-chip>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './chipdemo.html',
    styleUrls: ['chipdemo.scss']
})
export class ChipDemo {}`
    };
}
