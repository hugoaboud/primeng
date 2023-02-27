import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'target-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                <i>show</i> method takes two parameters, first one is the event and it is mandatory. By default the target component to align the overlay is the event target, if you'd like to align it to another element, provide it as the second
                parameter <i>target</i>.
            </p>
        </app-docsectiontext>
        <div class="card flex flex-column align-items-center gap-3">
            <p-button (click)="op.show($event, targetEl)" icon="pi pi-image" label="Show"></p-button>
            <div #targetEl class="mt-5 w-10rem h-5rem border-1 surface-border border-round flex align-items-center justify-content-center">
                <span>Target Element</span>
            </div>
            <p-overlayPanel #op>
                <img src="https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg" alt="product" />
            </p-overlayPanel>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class TargetDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-button (click)="op.show($event, targetEl)" icon="pi pi-image" label="Show"></p-button>
<div #targetEl class="mt-5 w-10rem h-5rem border-1 surface-border border-round flex align-items-center justify-content-center">
    <span>Target Element</span>
</div>
<p-overlayPanel #op>
    <img src="https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg" alt="product" />
</p-overlayPanel>`,

        html: `
<div class="card flex justify-content-center">
    <p-button (click)="op.show($event, targetEl)" icon="pi pi-image" label="Show"></p-button>
    <div #targetEl class="mt-5 w-10rem h-5rem border-1 surface-border border-round flex align-items-center justify-content-center">
        <span>Target Element</span>
    </div>
    <p-overlayPanel #op>
        <img src="https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg" alt="product" />
    </p-overlayPanel>
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
