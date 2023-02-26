import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
    selector: 'app-docsectiontext',
    templateUrl: './app.docsectiontext.component.html'
})
export class AppDocSectionTextComponent {
    @Input() title: string;

    @Input() id: string;

    @Input() level: number = 2;

    subscription!: Subscription;

    constructor(public router: Router) {
        this.subscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            const sub = event.url;
            if (sub.includes('#')) {
                const url = window.location.origin + sub;
                navigator.clipboard.writeText(url);
            }
        });
    }

    navigate(event) {
        this.router.navigate([this.router.url.split('#')[0]], { fragment: this.id });
        const parentElement = event.currentTarget.parentElement;
        const hash = window.location.hash.substring(1);

        setTimeout(() => {
            parentElement.scrollIntoView({ block: 'start' });
        }, 0);

        hash === this.id && event.preventDefault();
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
