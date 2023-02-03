import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, NgModule, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { CodeHighlighterComponent } from '../codehighlighter/app.codehighlighter.component';

@Component({
    selector: 'app-code',
    templateUrl: './app.code.component.html'
})
export class AppCodeComponent {
    @Input() code;
    @Input() hideToggleCode: boolean = false;
    @Input() hideCodeSandbox: boolean = false;
    @Input() hideStackBlitz: boolean = false;

    @ViewChild('code') codeViewChild: ElementRef;

    codeLang: string = 'html';

    constructor() {}

    changeLang(lang: string) {
        this.codeLang = lang;
    }

    async copyCode() {
        await navigator.clipboard.writeText(this.code[this.codeLang]);
    }
}

@NgModule({
    imports: [CommonModule, ButtonModule, TooltipModule],
    exports: [AppCodeComponent],
    declarations: [AppCodeComponent, CodeHighlighterComponent]
})
export class AppCodeModule {}
