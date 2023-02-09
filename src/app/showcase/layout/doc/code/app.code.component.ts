import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, NgModule, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { Code } from 'src/app/showcase/domain/code';
import { CodeHighlighterComponent } from '../codehighlighter/app.codehighlighter.component';
@Component({
    selector: 'app-code',
    templateUrl: './app.code.component.html'
})
export class AppCodeComponent {
    @Input() code!: Code;

    @Input() hideToggleCode: boolean = false;

    @Input() hideCodeSandbox: boolean = false;

    @Input() hideStackBlitz: boolean = false;

    @ViewChild('code') codeViewChild: ElementRef;

    lang!: string;

    constructor() {}

    ngOnInit() {
        this.lang = this.getLang();
    }

    changeLang(lang: string) {
        this.lang = lang;
    }

    getLang(): string {
        if (this.code) {
            return Object.keys(this.code)[0];
        }
    }

    async copyCode() {
        await navigator.clipboard.writeText(this.code[this.lang]);
    }

    getCode(lang: string) {
        if(this.code) {
            return this.code[lang];
        }
    }
}

@NgModule({
    imports: [CommonModule, ButtonModule, TooltipModule],
    exports: [AppCodeComponent],
    declarations: [AppCodeComponent, CodeHighlighterComponent]
})
export class AppCodeModule {}
