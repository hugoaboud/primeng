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

    constructor(public router: Router) {}

    navigate(event) {
        this.router.navigate([this.router.url.split('#')[0]], { fragment: this.id });
        const parentElement = event.currentTarget.parentElement;
        const hash = window.location.hash.substring(1);

        setTimeout(() => {
            parentElement.scrollIntoView({ block: 'start' });
        }, 0);

        hash === this.id && event.preventDefault();
    }
}
