import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'raised-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Raised buttons display a shadow to indicate elevation.</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap gap-3 justify-content-center">
            <button pButton type="button" label="Primary" class="p-button-raised"></button>
            <button pButton type="button" label="Secondary" class="p-button-raised p-button-secondary"></button>
            <button pButton type="button" label="Success" class="p-button-raised p-button-success"></button>
            <button pButton type="button" label="Info" class="p-button-raised p-button-info"></button>
            <button pButton type="button" label="Warning" class="p-button-raised p-button-warning"></button>
            <button pButton type="button" label="Help" class="p-button-raised p-button-help"></button>
            <button pButton type="button" label="Danger" class="p-button-raised p-button-danger"></button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class RaisedDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<button pButton type="button" label="Primary" class="p-button-raised"></button>
<button pButton type="button" label="Secondary" class="p-button-raised p-button-secondary"></button>
<button pButton type="button" label="Success" class="p-button-raised p-button-success"></button>
<button pButton type="button" label="Info" class="p-button-raised p-button-info"></button>
<button pButton type="button" label="Warning" class="p-button-raised p-button-warning"></button>
<button pButton type="button" label="Help" class="p-button-raised p-button-help"></button>
<button pButton type="button" label="Danger" class="p-button-raised p-button-danger"></button>`,

        html: `
<div class="card flex flex-wrap gap-3 justify-content-center">
    <button pButton type="button" label="Primary" class="p-button-raised"></button>
    <button pButton type="button" label="Secondary" class="p-button-raised p-button-secondary"></button>
    <button pButton type="button" label="Success" class="p-button-raised p-button-success"></button>
    <button pButton type="button" label="Info" class="p-button-raised p-button-info"></button>
    <button pButton type="button" label="Warning" class="p-button-raised p-button-warning"></button>
    <button pButton type="button" label="Help" class="p-button-raised p-button-help"></button>
    <button pButton type="button" label="Danger" class="p-button-raised p-button-danger"></button>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './raiseddemo.html'
})
export class RaisedDemo { }`
    };
}
