import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { Code } from 'src/app/showcase/domain/code';
import { CodeHighlighterComponent } from '../codehighlighter/app.codehighlighter.component';
import { useStackBlitz } from '../codeeditor';
@Component({
    selector: 'app-code',
    templateUrl: './app.code.component.html'
})
export class AppCodeComponent {

    @Input() code!: Code;

    @Input() service!: any;

    @Input() dependencies!: any;

    @Input() component!: string;

    @Input() extFiles!: any;

    @Input() hideToggleCode: boolean = false;

    @Input() hideCodeSandbox: boolean = false;

    @Input() hideStackBlitz: boolean = false;

    fullCodeVisible: boolean = false;

    lang!: string;

    selectedCode!: string;

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

    getCode(lang: string = 'basic') {
        if (this.code) {
            if (this.fullCodeVisible || this.hideToggleCode) {
                return this.code[lang];
            } else {
                return this.code['basic'];
            }
        }
    }

    toggleCode() {
        this.fullCodeVisible = !this.fullCodeVisible;
        this.fullCodeVisible && (this.lang = 'html');
    }

    openStackBlitz() {
        if(this.code) {
            useStackBlitz({code: this.code})    
        }
    }

    showCodesandbox() {}
}

@NgModule({
    imports: [CommonModule, ButtonModule, TooltipModule],
    exports: [AppCodeComponent],
    declarations: [AppCodeComponent, CodeHighlighterComponent]
})
export class AppCodeModule {}
