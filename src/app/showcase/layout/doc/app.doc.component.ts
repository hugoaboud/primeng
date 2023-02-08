import { Component, Input } from '@angular/core';
import { Doc } from '../../domain/doc';

@Component({
    selector: 'app-doc',
    templateUrl: './app.doc.component.html'
})
export class AppDocComponent {
    @Input() docs!: Doc[];

    @Input() header!: string;

    @Input() description!: string;

    @Input() apiDocs!: Doc[];

    activeTab: number = 0;
}
