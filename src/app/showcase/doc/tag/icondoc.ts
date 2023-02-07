import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'icon-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A font icon next to the value can be displayed with the <i>icon</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-2">
            <p-tag icon="pi pi-user" value="Primary"></p-tag>
            <p-tag icon="pi pi-check" severity="success" value="Success"></p-tag>
            <p-tag icon="pi pi-info-circle" severity="info" value="Info"></p-tag>
            <p-tag icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></p-tag>
            <p-tag icon="pi pi-times" severity="danger" value="Danger"></p-tag>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class IconDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card flex justify-content-center gap-2">
    <p-tag icon="pi pi-user" value="Primary"></p-tag>
    <p-tag icon="pi pi-check" severity="success" value="Success"></p-tag>
    <p-tag icon="pi pi-info-circle" severity="info" value="Info"></p-tag>
    <p-tag icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></p-tag>
    <p-tag icon="pi pi-times" severity="danger" value="Danger"></p-tag>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './tagdemo.html'
})
export class TagDemo {}`
    };
}
