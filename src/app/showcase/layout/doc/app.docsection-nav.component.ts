import { DOCUMENT } from '@angular/common';
import { Component, Inject, NgZone, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { Doc, DocService } from '../../service/doc.service';

@Component({
    selector: 'app-docsection-nav',
    templateUrl: './app.docsection-nav.component.html'
})
export class AppDocSectionNav {
    visible!: boolean;

    docs: Doc[];

    subscription!: Subscription;

    sections!: any;

    activeTab!: string;

    constructor(@Inject(DOCUMENT) private document: Document, private docService: DocService, private zone: NgZone, private renderer: Renderer2) {
        this.subscription = this.docService.docSectionNavActive$.subscribe((value: boolean) => {
            this.visible = value;
        });
    }

    ngOnInit(): void {
        console.log(this.document);
        this.sections = this.document.querySelectorAll('section');
        const hash = window.location.hash.substring(1);

        if (hash) {
            this.activeTab = hash;
            this.scrollTo(hash);
        } else if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            this.activeTab = this.getId(this.sections[0].querySelector('.doc-section-label'));
        }

        this.zone.runOutsideAngular(() => {
            this.renderer.listen(this.document, 'scroll', (event) => {});
        });
    }

    scrollTo(hash) {}

    getId(el): string {
        return el.querySelector('a').getAttribute('id');
    }

    onScroll() {}

    onButtonClick() {}
}
