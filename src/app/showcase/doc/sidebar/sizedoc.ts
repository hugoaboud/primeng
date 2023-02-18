import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'size-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Sidebar dimension can be defined with <i>style</i> or <i>styleClass</i> properties which can also be responsive when used with a CSS utility library like PrimeFlex.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-sidebar [(visible)]="sidebarVisible" styleClass="w-30rem">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </p-sidebar>
            <p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class SizeDocComponent {
    @Input() id: string;

    @Input() title: string;

    sidebarVisible!: boolean;

    code: Code = {
        basic: `
<p-sidebar [(visible)]="sidebarVisible" styleClass="w-30rem">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</p-sidebar>
<p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>`,

        html: `
<div class="card flex justify-content-center">
    <p-sidebar [(visible)]="sidebarVisible" styleClass="w-30rem">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
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
