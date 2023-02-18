import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'custom-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Sidebar is customizable by <i>header</i>, <i>content</i>, <i>footer</i> templates.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-sidebar [(visible)]="sidebarVisible">
                <ng-template pTemplate="header">Header Content</ng-template>
                <ng-template pTemplate="content">Body Content</ng-template>
                <ng-template pTemplate="footer">Footer Content</ng-template>
            </p-sidebar>
            <p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class CustomDocComponent {
    @Input() id: string;

    @Input() title: string;

    sidebarVisible!: boolean;

    code: Code = {
        basic: `
<p-sidebar [(visible)]="sidebarVisible">
    <ng-template pTemplate="header">Header Content</ng-template>
    <ng-template pTemplate="content">Body Content</ng-template>
    <ng-template pTemplate="footer">Footer Content</ng-template>
</p-sidebar>
<p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>`,

        html: `
<div class="card flex justify-content-center">
    <p-sidebar [(visible)]="sidebarVisible">
        <ng-template pTemplate="header">Header Content</ng-template>
        <ng-template pTemplate="content">Body Content</ng-template>
        <ng-template pTemplate="footer">Footer Content</ng-template>
    </p-sidebar>
    <p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './sidebardemo.html'
})
export class SidebarDemo {
    sidebarVisible!: boolean;
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarDemo } from './sidebardemo';

@NgModule({
    imports: [CommonModule, SidebarModule, FormsModule, ButtonModule],
    declarations: [SidebarDemo]
})
export class SidebarDemoModule {}`
    };
}
