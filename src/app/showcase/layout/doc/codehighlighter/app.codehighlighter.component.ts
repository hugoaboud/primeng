import { Component, ElementRef, Input, ViewChild, TemplateRef, ChangeDetectorRef, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { Code } from 'src/app/showcase/domain/code';

@Component({
    selector: 'code-highlighter',
    templateUrl: './app.codehighlighter.component.html'
})
export class CodeHighlighterComponent implements OnInit, OnChanges {
    @ViewChild('codeElement', { static: true }) codeElement: ElementRef;

    @Input() lang!: string;

    @Input() code!: Code;

    languageClassName!: string;

    codeTemplate: TemplateRef<any>;

    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.setClassName();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.code && changes.code.currentValue) {
            this.code = changes.code.currentValue;
        }
        if (changes.lang && changes.lang.currentValue) {
            const currentLang = changes.lang.currentValue; 
            this.lang = (currentLang === 'typescript' || currentLang === 'module') ? 'tsx' : currentLang === 'basic' ? 'html' : currentLang;
        }
    }

    setClassName() {
        this.languageClassName = 'language-' + this.lang;
    }
}
