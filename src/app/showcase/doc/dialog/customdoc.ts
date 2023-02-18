import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'custom-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Dialog can be customized using <i>header</i> and <i>footer</i> templates.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
            <p-dialog header="Header" [(visible)]="visible" [style]="{ width: '50vw' }">
                <ng-template pTemplate="header">
                    <span class="text-xl font-bold">Header Content</span>
                </ng-template>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ng-template pTemplate="footer">
                    <p-button icon="pi pi-check" (click)="visible = false" label="Ok" styleClass="p-button-text"></p-button>
                </ng-template>
            </p-dialog>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class CustomDocComponent {
    @Input() id: string;

    @Input() title: string;

    visible!: boolean;

    showDialog() {
        this.visible = true;
    }

    code: Code = {
        basic: `
<p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
<p-dialog header="Header" [(visible)]="visible" [style]="{ width: '50vw' }">
    <ng-template pTemplate="header">
        <span class="text-xl font-bold">Header Content</span>
    </ng-template>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <ng-template pTemplate="footer">
        <p-button icon="pi pi-check" (click)="visible = false" label="Ok" styleClass="p-button-text"></p-button>
    </ng-template>
</p-dialog>`,

        html: `
<div class="card flex justify-content-center">
    <p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
    <p-dialog header="Header" [(visible)]="visible" [style]="{ width: '50vw' }">
        <ng-template pTemplate="header">
            <span class="text-xl font-bold">Header Content</span>
        </ng-template>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ng-template pTemplate="footer">
            <p-button icon="pi pi-check" (click)="visible = false" label="Ok" styleClass="p-button-text"></p-button>
        </ng-template>
    </p-dialog>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './dialogdemo.html'
})
export class DialogDemo {

    visible!: boolean;

    showDialog() {
        this.visible = true;
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DialogDemo } from './dialogdemo';

@NgModule({
    imports: [CommonModule, DialogModule, ButtonModule],
    declarations: [DialogDemo]
})
export class DialogDemoModule {}`
    };
}
