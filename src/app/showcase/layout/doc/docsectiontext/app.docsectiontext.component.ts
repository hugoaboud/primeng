import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-docsectiontext',
    templateUrl: './app.docsectiontext.component.html'
})
export class AppDocSectionTextComponent {
    @Input() title: string;

    @Input() id: string;

    @Input() level: number = 2;

    constructor(public router: Router){}

    navigate() {
        this.router.navigate([this.router.url.split('#')[0]], { fragment: this.id });
        navigator.clipboard.writeText(window.location.href);
    }
}
