import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>OverlayPanel is accessed via its reference and visibility is controlled using <i>toggle</i>, <i>show</i> and <i>hide</i> methods with an event of the target.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-overlayPanel #op>
                <img src="assets/showcase/images/demo/product/bamboo-watch.jpg" alt="product" />
            </p-overlayPanel>
            <p-button (click)="op.toggle($event)" icon="pi pi-image" label="Show"></p-button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-overlayPanel #op>
    <img src="assets/showcase/images/demo/product/bamboo-watch.jpg" alt="product" />
</p-overlayPanel>
<p-button (click)="op.toggle($event)" icon="pi pi-image" label="Show"></p-button>`,

        html: `
<div class="card flex justify-content-center">
    <p-overlayPanel #op>
        <img src="assets/showcase/images/demo/product/bamboo-watch.jpg" alt="product" />
    </p-overlayPanel>
    <p-button (click)="op.toggle($event)" icon="pi pi-image" label="Show"></p-button>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './overlaypaneldemo.html'
})
export class OverlayPanelDemo {}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button'; 
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { OverlayPanelDemo } from './overlaypaneldemo';

@NgModule({
    imports: [CommonModule, OverlayPanelModule, ButtonModule],
    declarations: [OverlayPanelDemo]
})
export class OverlayPanelDemoModule {}`
    };
}
