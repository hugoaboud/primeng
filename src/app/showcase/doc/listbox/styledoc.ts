import { Component, Input } from '@angular/core';

@Component({
    selector: 'style-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Following is the list of structural style classes, for theming classes visit <a href="#" [routerLink]="['/theming']">theming</a> page.</p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-listbox</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-listbox-list</td>
                        <td>List container.</td>
                    </tr>
                    <tr>
                        <td>p-listbox-item</td>
                        <td>An item in the list.</td>
                    </tr>
                    <tr>
                        <td>p-listbox-header</td>
                        <td>Header element.</td>
                    </tr>
                    <tr>
                        <td>p-listbox-filter-container</td>
                        <td>Container of filter input in header.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
})
export class StyleDocComponent {
    @Input() id: string;

    @Input() title: string;
}
