import { Component, Input } from '@angular/core';

@Component({
    selector: 'events-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"></app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>onShow</td>
                        <td>-</td>
                        <td>Callback to invoke when an overlay becomes visible.</td>
                    </tr>
                    <tr>
                        <td>onHide</td>
                        <td>-</td>
                        <td>Callback to invoke after overlay gets hidden.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
})
export class EventsDocComponent {
    @Input() id: string;

    @Input() title: string;
}
