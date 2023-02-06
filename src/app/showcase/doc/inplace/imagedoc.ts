import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'image-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Any content such as an image can be placed inside an Inplace.</p>
        </app-docsectiontext>
        <div class="card">
            <p-inplace>
                <ng-template pTemplate="display">
                    <div class="inline-flex align-items-center">
                        <span class="pi pi-image" style="vertical-align: middle"></span>
                        <span class="ml-2">View Picture</span>
                    </div>
                </ng-template>
                <ng-template pTemplate="content">
                    <img src="assets/showcase/images/demo/galleria/galleria5.jpg" alt="Nature">
                </ng-template>
            </p-inplace>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class ImageDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card">
    <p-inplace>
        <ng-template pTemplate="display">
            <div class="inline-flex align-items-center">
                <span class="pi pi-image" style="vertical-align: middle"></span>
                <span class="ml-2">View Picture</span>
            </div>
        </ng-template>
        <ng-template pTemplate="content">
            <img src="assets/showcase/images/demo/galleria/galleria5.jpg" alt="Nature">
        </ng-template>
    </p-inplace>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './inplacedemo.html'
})

export class InplaceDemo {
}`
    };
}
