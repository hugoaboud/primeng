import { Component, Input } from '@angular/core';
import { Doc } from 'src/app/showcase/domain/doc';

@Component({
    selector: 'app-docapisection',
    templateUrl: './app.docapisection.component.html'
})
export class AppDocApiSection {
    @Input() docs: Doc[];
}
