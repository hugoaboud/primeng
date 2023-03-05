import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-docsectiontext',
    templateUrl: './app.docsectiontext.component.html'
})
export class AppDocSectionTextComponent {
    @Input() title: string;

    @Input() id: string;

    @Input() level: number = 2;

    constructor(public location: Location) {}

    navigate(event) {
        const hash = window.location.hash.substring(1);
        this.location.go(this.location.path().split('#')[0] + '#' + this.id);
        const parentElement = event.currentTarget.parentElement;
        
        setTimeout(() => {
            parentElement.scrollIntoView({ block: 'start', behavior: 'smooth'});
        }, 0);
        
        hash === this.id && event.preventDefault();
    }
}
