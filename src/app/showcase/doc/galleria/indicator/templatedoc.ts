import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../../domain/code';
import { PhotoService } from '../../../service/photo.service';

@Component({
    selector: 'template-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id" [level]="3">
            <p>Indicator content can be customized with the <i>indicator</i> template.</p>
        </app-docsectiontext>
        <div class="card">
            <p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="true" indicatorsPosition="left" [responsiveOptions]="responsiveOptions" [containerStyle]="{ width: '100%', 'margin-top': '2em' }">
                <ng-template pTemplate="item" let-item>
                    <img [src]="item.previewImageSrc" style="width: 100%; display: block;" />
                </ng-template>
                <ng-template pTemplate="thumbnail" let-item>
                    <div class="grid grid-nogutter justify-content-center">
                        <img [src]="item.thumbnailImageSrc" style="display: block;" />
                    </div>
                </ng-template>
                <ng-template pTemplate="indicator" let-index>
                    <span style="color: #e9ecef; cursor: pointer">
                        {{ index + 1 }}
                    </span>
                </ng-template>
            </p-galleria>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [PhotoService]
})
export class TemplateDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    images: any[];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }

    code: Code = {
        html: `
<div class="card">
    <p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="true" indicatorsPosition="left" [responsiveOptions]="responsiveOptions" [containerStyle]="{'width': '100%','margin-top': '2em'}">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.previewImageSrc" style="width: 100%; display: block;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" style="display: block;" />
            </div>
        </ng-template>
        <ng-template pTemplate="indicator" let-index>
            <span style="color: #e9ecef; cursor: pointer">
                {{index + 1}}
            </span>
        </ng-template>
    </p-galleria>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photo.service';

@Component({
    templateUrl: './galleriademo.html',
    styleUrls: ['./galleriademo.scss'],
    providers: [PhotoService]
})

export class GalleriaDemo implements OnInit {
    images: any[];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}`,
        data: `
/* PhotoService */
{
    itemImageSrc: 'https://primereact.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`
    };
}
