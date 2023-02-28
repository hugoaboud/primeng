import { Component, Input } from '@angular/core';

@Component({
    selector: 'videos-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
        <p>Video tutorials to take you through step-by-step.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-button label="Check" icon="pi pi-check"></p-button>
        </div>
    </div>`
})
export class VideosDocComponent {
    @Input() id: string;

    @Input() title: string;
}
