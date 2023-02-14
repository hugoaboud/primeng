import { Component, Input } from '@angular/core';

@Component({
    selector: 'templates-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Following is the list of structural style classes, for theming classes visit <a href="#" [routerLink]="['/theming']">theming</a> page.</p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>message</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
})
export class TemplatesDocComponent {
    @Input() id: string;

    @Input() title: string;
}
