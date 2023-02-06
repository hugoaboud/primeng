import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'document-doc',
    template: `
    <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Enabling <i>fullScreen</i> property controls the document.</p>
        </app-docsectiontext>
        <div class="card">
            <p-blockUI [blocked]="blockedDocument"></p-blockUI>
            <button type="button" pButton pRipple label="Block" (click)="blockDocument()"></button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DocumentDocComponent {
    @Input() id: string;

    @Input() title: string;
    
    blockedDocument: boolean = false;

    blockDocument() {
        this.blockedDocument = true;
        setTimeout(() => {
            this.blockedDocument = false;
        }, 3000);
    }

    code: Code = {
        html: `
<div class="card">
    <p-blockUI [blocked]="blockedDocument"></p-blockUI>
    <button type="button" pButton pRipple label="Block" (click)="blockDocument()"></button>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './blockuidemo.html'
})

export class BlockUIDemo {
    blockedDocument: boolean = false;

    blockDocument() {
        this.blockedDocument = true;
        setTimeout(() => {
            this.blockedDocument = false;
        }, 3000);
    }
}`
    };
}
