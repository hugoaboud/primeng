import { Component, Input } from '@angular/core';

@Component({
    selector: 'angular-cli-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Angular CLI is the official CLI tool for Angular to create Angular Apps. We strongly suggest using Angular CLI when starting an Angular project.</p>
        </app-docsectiontext>
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pkOx7bSBQsg" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>`
})
export class AngularCliDocComponent {
    @Input() id: string;

    @Input() title: string;
}
