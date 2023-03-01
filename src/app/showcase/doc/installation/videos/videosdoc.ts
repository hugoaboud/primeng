import { Component, Input } from '@angular/core';

@Component({
    selector: 'videos-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Video tutorials to take you through step-by-step.</p>
        </app-docsectiontext>
    </div>`
})
export class VideosDocComponent {
    @Input() id: string;

    @Input() title: string;
}
