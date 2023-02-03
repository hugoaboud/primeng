import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { Doc } from 'src/app/showcase/domain/doc';

@Component({
    selector: 'app-docsection-nav',
    templateUrl: './app.docsection-nav.component.html'
})
export class AppDocSectionNavComponent implements OnInit, OnDestroy {
    @Input() docs!: Doc[];

    visible!: boolean;

    subscription!: Subscription;

    sections!: any;

    activeTab!: string;

    scrollListener!: any;

    constructor(@Inject(DOCUMENT) private document: Document, private zone: NgZone, private renderer: Renderer2) {}

    ngOnInit(): void {
        this.sections = document.querySelectorAll('section'); // Get all sections on the page
        const hash = window.location.hash.substring(1); // Get the initial hash

        if (hash) {
            this.activeTab = hash;
            this.scrollTo(hash);
        } else if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            console.log(this.sections[0])
            this.activeTab = this.getId(this.sections[0]) ?? '0';
        }

        this.zone.runOutsideAngular(() => {
            this.scrollListener = this.renderer.listen(this.document, 'scroll', (event: any) => {
                this.onScroll();
            });
        });
    }

    scrollTo(id) {
        // this.document.getElementById(id).parentElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
        console.log(id)
    }

    getId(section): string {
        console.log(section)
        // return el.querySelector('a').getAttribute('id');
        return '';
    }

    onScroll() {
        const sections = this.document.querySelectorAll('section')
        const topbarEl = this.document.getElementsByClassName('layout-topbar')[0];

        sections.forEach((section) => {
            const sectionLabelEl = section.querySelectorAll('.doc-section-label');
            const isScrolledTo = (section) => window.scrollY >= section.offsetTop - topbarEl.clientHeight - 20 && window.scrollY < section.offsetTop + section.offsetHeight - topbarEl.clientHeight - 20;
            if (isScrolledTo(section)) {
                // Check if the section has multiple child elements
                if (sectionLabelEl.length > 1) {
                    sectionLabelEl.forEach((child) => {
                        // Check if the child element is currently scrolled to
                        if (isScrolledTo(child)) {
                            // Set the active tab to the id of the currently scrolled to child element
                            this.activeTab = this.getId(child);
                        }
                    });
                } else {
                    this.activeTab = this.getId(sectionLabelEl[0]);
                }
            }
        });
    }

    onButtonClick(doc) {
        // Scroll to the clicked button's parent element
        this.scrollTo(doc.id);
    }

    ngOnDestroy() {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
    }
}
