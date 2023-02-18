import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'fullscreen-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Sidebar can cover the whole page when <i>fullScreen</i> property is enabled.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-sidebar [(visible)]="sidebarVisible" [fullScreen]="true">
                <h3>Full Screen Sidebar</h3>
            </p-sidebar>
            <p-button (click)="sidebarVisible = true" icon="pi pi-th-large"></p-button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class FullScreenDocComponent {
    @Input() id: string;

    @Input() title: string;

    sidebarVisible!: boolean;

    code: Code = {
        basic: `
<p-sidebar [(visible)]="sidebarVisible" [fullScreen]="true">
    <h3>Full Screen Sidebar</h3>
</p-sidebar>
<p-button (click)="sidebarVisible = true" icon="pi pi-th-large"></p-button>`,

        html: `
<div class="card flex justify-content-center">
    <p-sidebar [(visible)]="sidebarVisible" [fullScreen]="true">
        <h3>Full Screen Sidebar</h3>
    </p-sidebar>
    <p-button (click)="sidebarVisible = true" icon="pi pi-th-large"></p-button>
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
