import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                A basic chip with a text is created with the <i>label</i> property. In addition when <i>removable</i> is added, a delete icon is displayed to remove a chip, the optional <i>onRemove</i> event is available to get notified when a chip
                is hidden.
            </p>
        </app-docsectiontext>
        <div class="card flex align-items-center gap-2">
            <p-chip label="Action"></p-chip>
            <p-chip label="Comedy"></p-chip>
            <p-chip label="Mystery"></p-chip>
            <p-chip label="Thriller" [removable]="true"></p-chip>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card flex align-items-center gap-2">
    <p-chip label="Action"></p-chip>
    <p-chip label="Comedy"></p-chip>
    <p-chip label="Mystery"></p-chip>
    <p-chip label="Thriller" [removable]="true"></p-chip>
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
