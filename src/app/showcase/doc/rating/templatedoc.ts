import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'template-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Templating allows customizing the content where the icon instance is available as the implicit variable.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-rating [(ngModel)]="value" stars="5">
                <ng-template pTemplate="cancel">
                    <img src="assets/showcase/images/demo/rating/cancel.png" width="25px" height="25px" />
                </ng-template>
                <ng-template pTemplate="onicon">
                    <img src="assets/showcase/images/demo/rating/custom-icon-active.png" width="25px" height="25px" />
                </ng-template>
                <ng-template pTemplate="officon">
                    <img src="assets/showcase/images/demo/rating/custom-icon.png" width="25px" height="25px" />
                </ng-template>
            </p-rating>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class TemplateDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: number;

    code: Code = {
        basic: `
<p-rating [(ngModel)]="value" stars="5">
    <ng-template pTemplate="cancel">
        <img src="assets/showcase/images/demo/rating/cancel.png" width="25px" height="25px" />
    </ng-template>
    <ng-template pTemplate="onicon">
        <img src="assets/showcase/images/demo/rating/custom-icon-active.png" width="25px" height="25px" />
    </ng-template>
    <ng-template pTemplate="officon">
        <img src="assets/showcase/images/demo/rating/custom-icon.png" width="25px" height="25px" />
    </ng-template>
</p-rating>`,

        html: `
<div class="card flex justify-content-center">
    <p-rating [(ngModel)]="value" stars="5">
        <ng-template pTemplate="cancel">
            <img src="assets/showcase/images/demo/rating/cancel.png" width="25px" height="25px" />
        </ng-template>
        <ng-template pTemplate="onicon">
            <img src="assets/showcase/images/demo/rating/custom-icon-active.png" width="25px" height="25px" />
        </ng-template>
        <ng-template pTemplate="officon">
            <img src="assets/showcase/images/demo/rating/custom-icon.png" width="25px" height="25px" />
        </ng-template>
    </p-rating>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './ratingdemo.html'
})
export class RatingDemo {
    value: number;
}`
    };
}
